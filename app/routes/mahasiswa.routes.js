const {authJwt} = require('../middleware');
const {verifyToken, isAdmin, isDosen} = authJwt;
const mahasiswa = require('../controllers/mahasiswa.controller');

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

  app.post(
      '/api/mahasiswa',
      [verifyToken, isAdmin],
      mahasiswa.create,
  );

  app.put(
      '/api/mahasiswa/:id',
      [verifyToken, isAdmin],
      mahasiswa.update,
  );

  app.delete(
      '/api/mahasiswa/:id',
      [verifyToken, isAdmin],
      mahasiswa.delete,
  );
};
