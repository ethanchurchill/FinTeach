//This class defines the controller for the module progress table
//All queries are defined (get, put etc.)
//These functions can be used by the front end to modify the backend

//Configuration constants necessary for Express
const db = require("../models");
const Moduleprogress = db.moduleprogress;
const Op = db.Sequelize.Op;



// Retrieve all module progresses from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Moduleprogress.findAll({ where: condition }) //calls the backend
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

exports.findWithId = (req, res) => {
  const module_id = req.params.module_id;
  const user_id = req.params.user_id;

  Moduleprogress.findAll({ where: { module_id: module_id, user_id: user_id } })
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

exports.create = (req, res) => {
    // Validate request
    if (!req.body.module_id || !req.body.user_id) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }

    // Create a Moduleprogress
    const progress = {
      module_completed: false,
      current_submodule: 1,
      module_id: req.body.module_id,
      user_id: req.body.user_id
    };

    // Save Moduleprogress in the database
    Moduleprogress.create(progress)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Moduleprogress."
        });
      });
  };

exports.update = (req, res) => {
  const moduleprogress_id = req.body.id;
  const current_submodule = req.body.current_submodule;
  const module_completed = req.body.module_completed;
  console.log(moduleprogress_id, current_submodule, module_completed);

  Moduleprogress.update({current_submodule:current_submodule,
                         module_completed:module_completed},
                         { where: {id: moduleprogress_id} })
    .then(data => {
        res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occured while updating the ModuleProgress"
      })
    })
}
