module.exports = app => {
    const quizoptions   = require("../controllers/quizoptions.controller.js");

    var router = require("express").Router();

    // quizoptions api endpoints.
    router.get("/", quizoptions.findAll);
    router.get("/from_quiz_id/:quiz_id", quizoptions.findFromQuizId);

    app.use('/api/quizoptions', router);
  };
