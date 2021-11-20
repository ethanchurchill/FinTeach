//This class defines the routes for the submodule table
//API endpoints are created that can be consumed by the frontend
module.exports = app => {
    const submodule   = require("../controllers/submodule.controller.js");

    var router = require("express").Router();

    //API Endpoint to retrieve all submodules
    router.get("/", submodule.findAll);
    //API Endpoint to retrieve submodule by module id
    router.get("/from_module_id/:p_module_id", submodule.findFromModuleId);

    app.use('/api/submodule', router);
  };
