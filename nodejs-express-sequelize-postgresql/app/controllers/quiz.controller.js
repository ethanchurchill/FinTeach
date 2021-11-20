//This class defines the controller for the quiz table
//All queries are defined (get, put etc.)
//These functions can be used by the front end to modify the backend

//Configuration constants necessary for Express
const db = require("../models");
const Quiz = db.quiz;
const Op = db.Sequelize.Op;

// Retrieve all quiz from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Quiz.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

// Find all quizes with a given parent submodule id from the database.
exports.findFromSubmoduleId = (req, res) => {
  const id = req.params.p_submodule_id;

  Quiz.findAll({ where: { p_submodule_id: id } })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Cannot find Tutorial with p_submodule_id=${p_submodule_id}."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Quiz with p_submodule_id=" + req.params.p_submodule_id
      });
    });
};
