const MovieModel = require('../models/movies')

const post = async (req, res) => {
  const newSchema = new MovieModel(req.body)
  try {
    let saved = await newSchema.save()
    saved ? res.send({message: 'movie '+newSchema.title+' saved suceesfully'}) : res.status(400).send({message: 'save movie error'})
  }catch(err){
    console.log(err)
    res.status(500).send({message: 'internal error saving movie'})
  }
}

const get = function (req, res) {
    MovieModel.find({}).exec( (err, result) => {
      if(err){
      console.log(err)
      res.status(500).send({message: 'internal error, cannot get movie'})
    }
    else
    result.length > 0 ? res.send(result) : res.send({message: 'there is not movies to show'})
  })
}

const update = async function (req, res) {
  try {
    let updated = await MovieModel.findOneAndUpdate({_id: req.params.id}, req.body)
    updated ? res.send('movie '+updated.title+' updated suceesfully') : res.status(400).send({message: 'update movie error'})
  }catch(err){
    console.log(err)
    res.status(500).send({message: 'Internal error updating movie'})
  }
}

const deleteOne = async function (req, res) {
  try {
    let removed = await await MovieModel.findOneAndRemove({_id: req.params.id})
    removed ? res.send('movie '+ removed.title +' removed suceesfully') : res.status(400).send({message: 'remove movie error'})
  }catch(err){
    console.log(err)
    res.status(500).send({message: 'Internal error removing movie'})
  }
}

module.exports = {
  post,
  get,
  update,
  deleteOne
}