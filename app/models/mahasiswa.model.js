module.exports = (sequelize, Sequelize) => {
  const Mahasiswa = sequelize.define('mahasiswa', {
    nama: {type: Sequelize.STRING},
    mk: {type: Sequelize.STRING},
  });
  return Mahasiswa;
};
