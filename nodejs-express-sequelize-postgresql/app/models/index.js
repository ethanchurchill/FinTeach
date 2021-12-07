
//Defines sequelize specific requirements
//These are boilerplate configs that don't require any user changes
const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

var config = {
  "define": {
      "createdAt": "createdat",
      "updatedAt": "updatedat"
    } 
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

//Defines the tables and models necessary for each table in the DB
//The model is pointed to within the file structure for proper retrieval
db.users = require("./users.model.js")(sequelize, Sequelize);
db.module = require("./module.model.js")(sequelize, Sequelize);
db.submodule = require("./submodule.model.js")(sequelize, Sequelize);
db.moduleprogress = require("./moduleprogress.model.js")(sequelize, Sequelize);
db.contentfield = require("./contentfield.model.js")(sequelize, Sequelize);
db.quiz = require("./quiz.model.js")(sequelize, Sequelize);
db.quizoptions = require("./quizoptions.model.js")(sequelize, Sequelize);

//Exports the database for use by the frontend.
module.exports = db;
