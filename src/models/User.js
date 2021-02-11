const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
  idToken: {type: String},
  name: {type: String},
})

module.exports = mongoose.model('User', User);