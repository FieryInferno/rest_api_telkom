const db = require('../models');
const MataKuliah = db.mk;

exports.findAll = (req, res) => {
  MataKuliah.findAll()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || 'Some error occured',
        });
      });
};
exports.userBoard = (req, res) => {
  res.status(200).send('User Content.');
};
exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.');
};
exports.moderatorBoard = (req, res) => {
  res.status(200).send('Moderator Content.');
};
