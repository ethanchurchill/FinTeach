module.exports = (sequelize, Sequelize) => {
    const Submodule = sequelize.define("submodule", {
      

      p_module_id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.INTEGER
      },
      

    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false //Ignores createdAt and updatedAt requirements
    });
  
    return Submodule;
  };
  