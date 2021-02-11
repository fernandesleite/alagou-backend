const { nextTick } = require('process');
const User = require('../models/User')

exports.create = function(req, res) {
  let user = new User ({
    idToken: req.body.idToken,
    name: req.body.name
  });

  user.save(function (err) {
    if (err) {
    return res.send(err.message);
     }
     res.send(user)
     })
}

exports.index = (req, res) => {
  User.find((err, data) => {
    if(err) {
      return next(err);
    }
    res.send(data)
  })
}

exports.show = (req, res) => {
  User.find({idToken: req.params.id}).exec(
    (err, data) => {
      if(err) {
        return next(err);
      }
      res.send(data)
    }
  )
}