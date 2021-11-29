//This class defines the routes for the module progress table
//API endpoints are created that can be consumed by the frontend
module.exports = app => {
    const moduleprogress   = require("../controllers/moduleprogress.controller.js");

    var router = require("express").Router();

    //API Endpoint to retrieve all module progress entries
    router.get("/", moduleprogress.findAll);
    router.get("/from_id/:user_id/:module_id", moduleprogress.findWithId);
    router.get("/from_userid/:user_id/", moduleprogress.findWithUserId);


    // API endpoints to create and update module progress entries
    router.post("/", moduleprogress.create);
    router.post("/update", moduleprogress.update);


    app.use('/api/moduleprogress', router);
  };
