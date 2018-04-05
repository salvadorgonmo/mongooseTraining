const MovieModel = require('../models/movies')

const post = async (req, res) => {
  const newSchema = new MovieModel(req.body)
  await newSchema.save()
  res.json({newSchema})
}

const get = function (req, res) {
    MovieModel.find({}).exec().then(function (result) {
    res.json({result})
  })
}

const update = async function (req, res) {
  await MovieModel.findOneAndUpdate({_id: req.params.id}, req.body)
  res.send()
}

const deleteOne = async function (req, res) {
  await MovieModel.findOneAndRemove({_id: req.params.id})
  res.send()
}

module.exports = {
  post,
  get,
  update,
  deleteOne
}