const db = require('../models');
const Mahasiswa = db.mahasiswa;

exports.findAll = (req, res) => {
  Mahasiswa.findAll({include: 'mk'})
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
  Mahasiswa.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};

exports.update = (req, res) => {
  const id = req.params.id;

  Mahasiswa.update(req.body, {where: {id: id}})
      .then((data) => {
        res.send({message: 'Mahasiswa was updated successfully.'});
      })
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  Mahasiswa.destroy({where: {id: id}})
      .then((data) => {
        res.send({message: 'Mahasiswa was delete successfully.'});
      })
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};
