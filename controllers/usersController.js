const UserModel = require('../models/users')

const post = async (req, res) => {
  const newSchema = new UserModel({
    name: req.body.name,
    type: req.body.type,
    account: req.params.id
  })
  await newSchema.save()
  res.json({ newSchema })
}

const get = function (req, res) {
  UserModel.find({ account: req.params.id }).populate({ path: 'account' }).exec((err, result) => {
    if(err){
      return res.status(400).send('Check your account id')
    }else{
        result = result.map(element =>{
          return element.account.map(elemento =>{
            return {account: elemento.id,
                    accountEmail: elemento.email,
                    profile: element.id,
                    name: element.name,
                    type: element.type}
          })
      })
      res.send(result)
    }
  })
}

const update = async function (req, res) {
  try {
    let id = await UserModel.findOneAndUpdate({ _id: req.params.id }, req.body)
    if(id){
      res.status(200).send()
    }
  } catch (error) {
    res.status(500).send('error update db')
  }
}

const deleteOne = async function (req, res) {
  try {
    let id = await UserModel.findOneAndRemove({ _id: req.params.id })
    if(id){
      res.status(200).send()
    }
  } catch (error) {
    res.status(500).send('Wrong id, not fund!')
  }
}

module.exports = {
  post,
  get,
  update,
  deleteOne
}
