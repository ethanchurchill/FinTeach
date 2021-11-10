const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

var config = {
  "define": {
      "createdAt": "createdat",
      "updatedAt": "updatedat"
    } /*don't forget to add host, port, dialect, etc.*/
  }
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.module = require("./tutorial.model.js")(sequelize, Sequelize);
db.submodule = require("./submodule.model.js")(sequelize, Sequelize);
db.moduleprogress = require("./moduleprogress.model.js")(sequelize, Sequelize);
db.contentfield = require("./contentfield.model.js")(sequelize, Sequelize);
db.quiz = require("./quiz.model.js")(sequelize, Sequelize);
db.quizoptions = require("./quizoptions.model.js")(sequelize, Sequelize);


module.exports = db;
