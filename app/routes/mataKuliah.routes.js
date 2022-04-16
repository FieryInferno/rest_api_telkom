const {authJwt} = require('../middleware');
const {verifyToken, isAdmin, isDosen} = authJwt;
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
      '/api/mata_kuliah',
      [verifyToken, isAdmin || isDosen],
      mataKuliah.findAll,
  );
  app.post(
      '/api/mata_kuliah',
      [verifyToken, isAdmin || isDosen],
      mataKuliah.create,
  );
};
