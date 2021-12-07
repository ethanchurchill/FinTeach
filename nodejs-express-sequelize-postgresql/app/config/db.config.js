//This file defines all the configurations for the database
//For each user the USER, PASSWORD and DB will need to be changed
//This depends on the postgres configuration for the user
//The other fields will remain the same

module.exports = {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "CHANGEME",
    DB: "finteach_db",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
