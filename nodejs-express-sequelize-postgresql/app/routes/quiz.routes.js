//This class defines the routes for the quiz table
//API endpoints are created that can be consumed by the frontend
module.exports = app => {
    const quiz   = require("../controllers/quiz.controller.js");

    var router = require("express").Router();

    // API Endpoint to retrieve all quizzes
    router.get("/", quiz.findAll);
    //API endpoint to retrieve quiz by submodule id
    router.get("/from_submodule_id/:p_submodule_id", quiz.findFromSubmoduleId);

    app.use('/api/quiz', router);
  };
