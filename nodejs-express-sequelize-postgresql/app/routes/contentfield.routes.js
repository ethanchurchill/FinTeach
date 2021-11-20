//This class defines the routes for the content field table
//API endpoints are created that can be consumed by the frontend
module.exports = app => {
    const contentfield   = require("../controllers/contentfield.controller.js");

    var router = require("express").Router();

    // API Endpoint for getting all
    router.get("/", contentfield.findAll);
     // API Endpoint for getting with a submodule id
    router.get("/from_submodule_id/:p_submodule_id", contentfield.findFromSubmoduleId);

    app.use('/api/contentfield', router);
  };
