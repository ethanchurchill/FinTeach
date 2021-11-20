module.exports = app => {
    const quiz   = require("../controllers/quiz.controller.js");

    var router = require("express").Router();

    // quiz api endpoints.
    router.get("/", quiz.findAll);
    router.get("/from_submodule_id/:p_submodule_id", quiz.findFromSubmoduleId);

    app.use('/api/quiz', router);
  };
