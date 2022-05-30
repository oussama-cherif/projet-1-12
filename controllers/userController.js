const User = require('../models/User')

const getUsers = async(req, res) => {
  try {
    const users = await User.find()
    res.render('users',{ users })
  } catch(err) {
    console.log(err.message)
  }
}

const getUser = async(req, res) => {
  try {
    const userId = req.params.id
    const user = await User.findById(userId).populate('articles')
    res.render('userDetails',{ user })
  } catch(err) {
    console.log(err.message)
  }
}

const addUser = async(req, res) => {
  try {
    const {username, email, age} = req.body
    const user = await User.create({
      username,
      email,
      age
    })
    console.log(user)
  } catch(err) {  
    console.log(err.message)
  }
}

module.exports = {
  getUsers,
  getUser,
  addUser
}