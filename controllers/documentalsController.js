const DocumentalModel = require('../models/documental')

const post = async (req, res) => {
  const newSchema = new DocumentalModel(req.body)
  try {
    let saved = await newSchema.save()
    saved ? res.send({message: 'documental '+newSchema.name+' saved suceesfully'}) : res.status(400).send({message: 'save documental error'})
  }catch(err){
    console.log(err)
    res.status(500).send({message: 'internal error saving documental'})
  }
}

const get = function (req, res) {
    DocumentalModel.find({}).exec((err, result) =>{
      if(err){
        console.log(err)
        res.status(500).send({message: 'internal error, cannot get documentals'})
      }
      else
        result.length > 0 ? res.send(result) : res.send({message: 'there is not documentals to show'})
    })
}

const update = async function (req, res) {
  try {
    let updated = await DocumentalModel.findOneAndUpdate({_id: req.params.id}, req.body) 
    updated ? res.send('Documental '+updated.name+' updated suceesfully') : res.status(400).send({message: 'update documental error'})
  }catch(err){
    console.log(err)
    res.status(500).send({message: 'Internal error updating documental'})
  }
}

const deleteOne = async function (req, res) {
  try {
    let removed = await DocumentalModel.findOneAndRemove({_id: req.params.id})
    removed ? res.send('Documental '+removed.name+' removed suceesfully') : res.status(400).send({message: 'remove documental error'})
  }catch(err){
    console.log(err)
    res.status(500).send({message: 'Internal error removing documental'})
  }
}

module.exports = {
  post,
  get,
  update,
  deleteOne
}
