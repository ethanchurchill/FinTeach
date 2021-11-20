const db = require("../models");
const Submodule = db.submodule;
const Op = db.Sequelize.Op;

// Retrieve all submodules from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Submodule.findAll({ where: condition })
    .then(data => {
      res.send(data); //send data to frontend.
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Submodules."
      });
    });
};

// Find all submodules with a given parent module id from the database.
exports.findFromModuleId = (req, res) => {
  const id = req.params.p_module_id;

  Submodule.findAll({ where: { p_module_id: id } })
    .then(data => {
      if (data) {
        res.send(data); //send data to frontend.
      } else {
        res.status(404).send({
          message: "Cannot find Submodule with p_module_id=${id}."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Submodule with p_module_id=" + req.params.p_module_id
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
