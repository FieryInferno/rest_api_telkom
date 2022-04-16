const {verifySignUp} = require('../middleware');
const {
  checkDuplicateUsername,
  checkMataKuliah,
  checkLowercaseUsername,
} = verifySignUp;
const controller = require('../controllers/auth.controller');

module.exports = (app) => {
  app.use((req, res, next) => {
    res.header(
        'Access-Control-Allow-Headers',
        'x-access-token, Origin, Content-Type, Accept',
    );

    next();
  });

  app.post(
      '/api/auth/signup',
      [checkDuplicateUsername, checkMataKuliah, checkLowercaseUsername],
      controller.signup,
  );

  app.post('/api/auth/signin', controller.signin);
};