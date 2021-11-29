//This class defines the controller for the module table
//All queries are defined (get, put etc.)
//These functions can be used by the front end to modify the backend

//Configuration constants necessary for Express
const db = require("../models");
const Module = db.module;
const Op = db.Sequelize.Op;



// Retrieves all Modules from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Module.findAll({ where: condition })  //Retrieves all modules from postgres
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

// Retrieve module progress with spesific user id.
exports.findWithId = (req, res) => {
  const module_id = req.params.module_id;

  Module.findAll({ where: { id: module_id } })
    .then(data => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: "Cannot find Moduleprogress with module_id=${module_id} and user_id=${user_id}."
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Moduleprogress with module_id=" + req.params.module_id + " and user_id=" +  req.params.user_id
      });
    });
};
