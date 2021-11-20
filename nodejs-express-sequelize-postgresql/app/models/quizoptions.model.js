
//Defines the table structure present in the quiz options table
//This is used by Express to get a JSON object with the correct attributes
module.exports = (sequelize, Sequelize) => {
    const QuizOptions = sequelize.define("quiz_options", {


      quiz_id: {
        type: Sequelize.INTEGER
      },
      content: {
        type: Sequelize.STRING
      },
      order: {
        type: Sequelize.INTEGER
      },

    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false //Ignores createdAt and updatedAt requirements
    });

    return QuizOptions;
  };
