const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Flooding = new Schema({
  latitude: {type: Number},
  longitude: {type: Number},
  note: {type: String},
  createAt: { type : Date, default: Date.now },
  user: {type: String}
});

Flooding.virtual('userDetails', {
  ref: 'User',
  localField: 'user',
  foreignField: 'idToken',
  justOne: true
})



module.exports = mongoose.model('Flooding', Flooding);