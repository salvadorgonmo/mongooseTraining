const SerieModel = require('../models/series')

const post = async (req, res) => {
  const newSchema = new SerieModel(req.body)
  try {
    let saved = await newSchema.save()
    saved ? res.send({message: 'serie '+newSchema.title+' saved suceesfully'}) : res.status(400).send({message: 'save serie error'})
  }catch(err){
    console.log(err)
    res.status(500).send({message: 'internal error saving serie'})
  }
}

const get = function (req, res) {
    SerieModel.find({}).exec((err, result) =>{
      if(err){
        console.log(err)
        res.status(500).send({message: 'internal error, cannot get series'})
      }
      else
      result.length > 0 ? res.send(result) : res.send({message: 'there is not series to show'})
    })
}

const update = async function (req, res) {
  try {
    let updated = await SerieModel.findOneAndUpdate({_id: req.params.id}, req.body)
    updated ? res.send('serie '+updated.title+' updated suceesfully') : res.status(400).send({message: 'update serie error'})
  }catch(err){
    console.log(err)
    res.status(500).send({message: 'Internal error updating serie'})
  }
}

const deleteOne = async function (req, res) {
  try {
    let removed = await SerieModel.findOneAndRemove({_id: req.params.id})
    removed ? res.send('serie '+removed.title+' removed suceesfully') : res.status(400).send({message: 'remove serie error'})
  }catch(err){
    console.log(err)
    res.status(500).send({message: 'Internal error removing serie'})
  }
}

module.exports = {
  post,
  get,
  update,
  deleteOne
}
