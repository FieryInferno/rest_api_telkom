module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('users', {
    username: {type: Sequelize.STRING},
    password: {type: Sequelize.STRING},
    name: {type: Sequelize.STRING},
    nip: {type: Sequelize.STRING},
    role: {type: Sequelize.STRING},
  });
  return User;
};
