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
  MataKuliah.create(req.body)
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};

exports.update = (req, res) => {
  const id = req.params.id;

  MataKuliah.update(req.body, {where: {id: id}})
      .then((data) => {
        res.send({message: 'Mata kuliah was updated successfully.'});
      })
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};

exports.delete = (req, res) => {
  const id = req.params.id;

  MataKuliah.destroy({where: {id: id}})
      .then((data) => {
        res.send({message: 'Mata kuliah was delete successfully.'});
      })
      .catch((err) => {
        res.status(500).send({message: err.message || 'Some error occured'});
      });
};
