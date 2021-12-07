//This class defines the routes for the quiz options table
//API endpoints are created that can be consumed by the frontend
module.exports = app => {
    const quizoptions   = require("../controllers/quizoptions.controller.js");

    var router = require("express").Router();

    // API Endpoint to retrieve all quizzes
    router.get("/", quizoptions.findAll);
    //API Endpoint to retrieve quizzes based on quiz id
    router.get("/from_quiz_id/:quiz_id", quizoptions.findFromQuizId);

    app.use('/api/quizoptions', router);
  };
