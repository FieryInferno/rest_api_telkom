const {authJwt} = require('../middleware');
const {verifyToken, isAdmin, isDosen} = authJwt;
const mahasiswa = require('../controllers/mahasiswa.controller');
const mataKuliah = require('../controllers/mataKuliah.controller');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );
    next();
  });
  app.get(
      '/api/mahasiswa',
      [verifyToken, isAdmin || isDosen],
      mahasiswa.findAll,
  );
  app.get(
      '/api/mata_kuliah',
      [verifyToken, isAdmin || isDosen],
      mataKuliah.findAll,
  );
  // app.get(
  //     '/api/test/user',
  //     [authJwt.verifyToken],
  //     controller.userBoard,
  // );
  // app.get(
  //     '/api/test/mod',
  //     [authJwt.verifyToken, authJwt.isAdmin],
  //     controller.moderatorBoard,
  // );
  // app.get(
  //     '/api/test/admin',
  //     [authJwt.verifyToken, authJwt.isAdmin],
  //     controller.adminBoard,
  // );
};
