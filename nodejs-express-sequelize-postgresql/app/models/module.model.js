
//Defines the table structure present in the module table
//This is used by Express to get a JSON object with the correct attributes
module.exports = (sequelize, Sequelize) => {
    const Module = sequelize.define("module", {
      
      name: {
        type: Sequelize.STRING
      },
      total_submodules: {
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.STRING
      },
      img_ref: {
        type: Sequelize.STRING
      },
      module_length: {
        type: Sequelize.STRING
      },
      etc: {
        type: Sequelize.STRING
      },
      

    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false //Ignores createdAt and updatedAt requirements
    });
  
    return Module;
  };
  