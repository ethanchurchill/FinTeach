module.exports = (sequelize, Sequelize) => {
    const Quiz = sequelize.define("quiz", {


      p_submodule_id: {
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.STRING
      },
      img_ref: {
        type: Sequelize.STRING
      },



    },{
        freezeTableName: true, // Model tableName will be the same as the model name
        timestamps: false //Ignores createdAt and updatedAt requirements
    });

    return Quiz;
  };
