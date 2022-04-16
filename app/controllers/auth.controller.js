const db = require('../models');
const config = require('../config/auth.config');
const User = db.user;
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
  User.create({
    username: req.body.username,
    password: bcrypt.hashSync(req.body.password, 8),
    name: req.body.name,
    nip: req.body.nip,
    role: req.body.role,
    mkId: req.body.mk,
  }).then((user) => {
    res.send({message: 'User was registered'});
  }).catch((err) => {
    res.status(500).send({message: err.message});
  });
};

exports.signin = (req, res) => {
  User.findOne({
    where: {username: req.body.username},
  }).then((user) => {
    if (!user) {
      return res.status(404).send({message: 'User not found'});
    }

    const passwordIsValid = bcrypt.compareSync(
        req.body.password, user.password,
    );

    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: 'Invalid password',
      });
    }

    const token = jwt.sign({id: user.id}, config.secret, {expiresIn: 86400});

    res.status(200).send({
      username: user.username,
      name: user.name,
      nip: user.nip,
      roles: user.role,
      accessToken: token,
    });
  }).catch((err) => {
    res.status(500).send({message: err.message});
  });
};
