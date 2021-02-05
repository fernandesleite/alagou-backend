const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Flooding = new Schema({
  name: {type: String},
  latitude: {type: Number},
  longitude: {type: Number},
  note: {type: Number},
  createAt: {type: String},
  user: {type: String}
});

module.exports = mongoose.model('Flooding', Flooding);