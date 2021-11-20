//This class defines the routes for the users table
//API endpoints are created that can be consumed by the frontend
module.exports = app => {
    const users   = require("../controllers/users.controller.js");
  
    var router = require("express").Router();
  
    //API Endpoint to retrieve all users
    router.get("/", users.findAll);
 
  
    app.use('/api/users', router);
  };