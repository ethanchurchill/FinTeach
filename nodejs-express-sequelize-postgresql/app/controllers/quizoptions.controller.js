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

// // Update a Tutorial by the id in the request
// exports.update = (req, res) => {

// };

// // Delete a Tutorial with the specified id in the request
// exports.delete = (req, res) => {

// };

// // Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {

// };

// // Find all published Tutorials
// exports.findAllPublished = (req, res) => {

// };
