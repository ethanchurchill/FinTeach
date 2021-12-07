//This class defines the routes for the module table
//API endpoints are created that can be consumed by the frontend
module.exports = app => {
    const module   = require("../controllers/module.controller.js");

    var router = require("express").Router();

    //API endpoint to retrieve all modules in the database
    router.get("/", module.findAll);
    router.get("/find_id/:module_id", module.findWithId);

    app.use('/api/modules', router);
  };
