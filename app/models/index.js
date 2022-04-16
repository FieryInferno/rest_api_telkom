const config = require('../config/db.config.js');
const Sequelize = require('sequelize');
const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require('../models/user.model.js')(sequelize, Sequelize);
db.mahasiswa = require('../models/mahasiswa.model.js')(sequelize, Sequelize);
db.mk = require('../models/mk.model.js')(sequelize, Sequelize);
db.user.belongsTo(db.mk);
db.mk.hasOne(db.user);

module.exports = db;
