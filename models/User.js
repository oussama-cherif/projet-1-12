const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: String,
  age: Number,
  articles : [
    {
      type: Schema.Types.ObjectId,
      ref: 'Article'
    }
  ],
})

module.exports = mongoose.model('User', userSchema);