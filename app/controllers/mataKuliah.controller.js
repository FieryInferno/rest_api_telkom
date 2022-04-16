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

exports.create = (req, res) => {
  const {kode, nama, jadwal} = req.body;
  MataKuliah.create({
    kode: kode,
    nama: nama,
    jadwal: jadwal,
  })
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};
exports.adminBoard = (req, res) => {
  res.status(200).send('Admin Content.');
};
exports.moderatorBoard = (req, res) => {
  res.status(200).send('Moderator Content.');
};
