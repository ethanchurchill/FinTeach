module.exports = (sequelize, Sequelize) => {
    const Moduleprogress = sequelize.define("module_progress", {
      

      module_completed: {
        type: Sequelize.BOOLEAN
      },
      current_submodule: {
        type: Sequelize.INTEGER
      },
      module_id: {
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER
      },
    
      

    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false //Ignores createdAt and updatedAt requirements
    });
  
    return Moduleprogress;
  };
  