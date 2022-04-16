const jwt = require('jsonwebtoken');
const config = require('../config/auth.config.js');
const db = require('../models');
const User = db.user;

const verifyToken = (req, res, next) => {
  const token = req.headers['x-access-token'];

  if (!token) {
    return res.status(403).send({message: 'No toke provided'});
  }

  jwt.verify(token, config.secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({message: 'Unauthorized'});
    }

    req.userId = decoded.id;
    next();
  });
};

const isAdmin = (req, res, next) => {
  console.log(req.userId);
  User.findByPk(req.userId).then((user) => {
    if (user.role === 'admin') {
      next();
      return;
    }

    res.status(403).send({message: 'Required admin role'});
    return;
  });
};

const isDosen = (req, res, next) => {
  User.findByPk(req.userId).then((user) => {
    if (user.roles === 'dosen') {
      next();
      return;
    }

    res.status(403).send({message: 'Required dosen role'});
    return;
  });
};

const authJwt = {
  verifyToken: verifyToken,
  isAdmin: isAdmin,
  isDosen: isDosen,
};

module.exports = authJwt;
