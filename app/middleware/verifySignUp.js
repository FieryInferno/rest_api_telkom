const db = require('../models');
const User = db.user;
const Mk = db.mk;

const checkDuplicateUsername = (req, res, next) => {
  User.findOne({
    where: {username: req.body.username},
  }).then((user) => {
    if (user) {
      res.status(400).send({message: 'Username is already in use'});
      return;
    };
    next();
  });
};

const checkMataKuliah = (req, res, next) => {
  Mk.findOne({
    where: {id: req.body.mkId},
  }).then((mk) => {
    if (req.body.role !== 'admin' && !mk) {
      res.status(400).send({message: 'Mata kuliah is not found'});
      return;
    }
    next();
  });
};

const checkLowercaseUsername = (req, res, next) => {
  if (req.body.username !== req.body.username.toLowerCase()) {
    res.status(400).send({message: 'Username must be lowercase'});
    return;
  }
  next();
};

const verifySignUp = {
  checkDuplicateUsername: checkDuplicateUsername,
  checkMataKuliah: checkMataKuliah,
  checkLowercaseUsername: checkLowercaseUsername,
};

module.exports = verifySignUp;
