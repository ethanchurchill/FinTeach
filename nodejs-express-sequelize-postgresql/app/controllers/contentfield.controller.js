const db = require("../models");
const Contentfield = db.contentfield;
const Op = db.Sequelize.Op;

// Retrieve all content fields options from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Contentfield.findAll({ where: condition })
    .then(data => {
      res.send(data); //send data to frontend.
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Contentfield."
      });
    });
};

// Find all content fields options with a given parent submodule id from the database.
exports.findFromSubmoduleId = (req, res) => {
  const id = req.params.p_submodule_id;

  Contentfield.findAll({ where: { p_submodule_id: id } })
    .then(data => {
      if (data) {
        res.send(data); //send data to frontend.
      } else {
        res.status(404).send({
          message: "Cannot find Contentfield with p_submodule_id=${p_submodule_id}."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Contentfield with p_submodule_id=" + req.params.p_submodule_id
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
