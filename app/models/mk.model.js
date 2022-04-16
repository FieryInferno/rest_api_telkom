module.exports = (sequelize, Sequelize) => {
  const mataKuliah = sequelize.define('mk', {
    kode: {type: Sequelize.STRING},
    nama: {type: Sequelize.STRING},
    jadwal: {type: Sequelize.STRING},
  });
  return mataKuliah;
};
