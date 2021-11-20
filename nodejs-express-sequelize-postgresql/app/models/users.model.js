module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
      

      
      username: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      created_date: {
        type: Sequelize.STRING
      },
      

    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false //Ignores createdAt and updatedAt requirements
    });
  
    return Users;
  };
  