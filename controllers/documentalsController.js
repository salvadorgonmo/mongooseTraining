const DocumentalModel = require('../models/series')

const post = async (req, res) => {
  const newSchema = new DocumentalModel(req.body)
  await newSchema.save()
  res.json({newSchema})
}

const get = function (req, res) {
    DocumentalModel.find({}).exec().then(function (result) {
    res.json({result})
  })
}

const update = async function (req, res) {
  await DocumentalModel.findOneAndUpdate({_id: req.params.id}, req.body)
  res.send()
}

const deleteOne = async function (req, res) {
  await DocumentalModel.findOneAndRemove({_id: req.params.id})
  res.send()
}

module.exports = {
  post,
  get,
  update,
  deleteOne
}
