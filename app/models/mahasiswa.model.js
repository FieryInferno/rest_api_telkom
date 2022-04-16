module.exports = (sequelize, Sequelize) => {
  const Mahasiswa = sequelize.define('mahasiswa', {
    nama: {type: Sequelize.STRING},
  });
  return Mahasiswa;
};
