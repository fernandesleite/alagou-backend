const { nextTick } = require('process');
const Flooding = require('../models/Flooding');

exports.create = function(req, res) {
  console.log("criando");
  
  let flooding = new Flooding({
    name: req.body.name,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    note: req.body.note,
    createAt: req.body.createAt,
    user: req.body.user,
  });
  flooding.save(function (err) {
    if (err) {
    return next(err);
     }
     res.send(flooding)
     })
};

exports.index = function(req, res) {  
  Flooding.find((err, data) => {
    if(err) {
      return next(err);
    }
    res.send(data);
  })
};

exports.show = function(req, res) {  
  Flooding.findById(req.params.id, (err, data) => {
    if(err) {
      return next(err);
    }
    res.send(data);
  })
};
