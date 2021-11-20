//This class defines the routes for the module progress table
//API endpoints are created that can be consumed by the frontend
module.exports = app => {
    const moduleprogress   = require("../controllers/moduleprogress.controller.js");
  
    var router = require("express").Router();
  
    //API Endpoint to retrieve all module progress entries
    router.get("/", moduleprogress.findAll);
 
  
    app.use('/api/moduleprogress', router);
  };