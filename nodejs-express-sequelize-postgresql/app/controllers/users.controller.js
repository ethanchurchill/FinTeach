//This class defines the controller for the users table
//All queries are defined (get, put etc.)
//These functions can be used by the front end to modify the backend

//Configuration constants necessary for Express
const db = require("../models");
const Users = db.users;
const Op = db.Sequelize.Op;

//Create a user using the information in req
exports.create = (req, res) => {
    // Validate request
    if (!req.body.username) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a User
    const user = {
      username: req.body.username,
      password: req.body.password,
      name: 'test',
      email: req.body.email,
      created_date: '1900-01-01 00:00:00'
    };
  
    // Save Tutorial in the database
    Users.create(user)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

// Retrieve all users from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;

  Users.findAll({ where: condition })
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
