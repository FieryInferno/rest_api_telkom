const db = require('../models');
const User = db.user;
const Mk = db.mk;

const checkUsername = (req, res, next) => {
  User.findOne({
    where: {username: req.body.username},
  }).then((user) => {
    if (user) {
      res.status(400).send({message: 'Username is already in use'});
      return;
    };

    if (req.body.username !== req.body.username.toLowerCase()) {
      res.status(400).send({message: 'Username must be lowercase'});
      return;
    }

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

const checkPassword = (req, res, next) => {
  if (!req.body.password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
  ) {
    return res.status(400).send({
      message: `
        Password must have 8 characters,
        have a combination of uppercase and lowercase letters
      `,
    });
    return;
  }

  next();
};

const verifySignUp = {
  checkUsername: checkUsername,
  checkMataKuliah: checkMataKuliah,
  checkPassword: checkPassword,
};

module.exports = verifySignUp;
