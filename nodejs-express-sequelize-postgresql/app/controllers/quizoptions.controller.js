//This class defines the controller for the quiz options table
//All queries are defined (get, put etc.)
//These functions can be used by the front end to modify the backend

//Configuration constants necessary for Express
const db = require("../models");
const QuizOptions = db.quizoptions;
const Op = db.Sequelize.Op;

// Retrieve all quiz options from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  QuizOptions.findAll({ where: condition })
    .then(data => {
      res.send(data); //send data to frontend.
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving QuizOptions."
      });
    });
};

// Find all quiz options with a given parent quiz id from the database.
exports.findFromQuizId = (req, res) => {
  const id = req.params.quiz_id;

  QuizOptions.findAll({ where: { quiz_id: id } })
    .then(data => {
      if (data) {
        res.send(data); //send data to frontend.
      } else {
        res.status(404).send({
          message: "Cannot find QuizOptions with quiz_id=${quiz_id}."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving QuizOptions with quiz_id=" + req.params.quiz_id
      });
    });
};

