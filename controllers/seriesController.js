const SerieModel = require('./models/series')

const post = async (req, res) => {
  const newSchema = new SerieModel(req.body)
  await newSchema.save()
  res.json({newSchema})
}

const get = function (req, res) {
    SerieModel.find({}).exec().then(function (result) {
    res.json({result})
  })
}

const update = async function (req, res) {
  await SerieModel.findOneAndUpdate({_id: req.params.id}, req.body)
  res.send()
}

const deleteOne = async function (req, res) {
  await SerieModel.findOneAndRemove({_id: req.params.id})
  res.send()
}

module.exports = {
  post,
  get,
  update,
  deleteOne
}
