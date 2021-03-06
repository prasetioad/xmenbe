const dbConfig = require("../configs");
const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.hero = require('./hero')(sequelize, Sequelize);
db.skill = require('./skill')(sequelize, Sequelize);


module.exports = db;