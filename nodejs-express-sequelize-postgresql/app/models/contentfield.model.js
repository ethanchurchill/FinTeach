//Defines the table columns present in the content field table
//This is used by Express to get a JSON object with the correct attributes

module.exports = (sequelize, Sequelize) => {
    const Contentfield = sequelize.define("content_field", {
      

      p_submodule_id: {
        type: Sequelize.INTEGER
      },
      subtitle: {
        type: Sequelize.STRING
      },
      material: {
        type: Sequelize.STRING
      },
      img_ref: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.INTEGER
      },
    
      

    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false //Ignores createdAt and updatedAt requirements
    });
  
    return Contentfield;
  };
  