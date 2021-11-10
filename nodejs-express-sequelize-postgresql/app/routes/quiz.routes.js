module.exports = app => {
    const quiz   = require("../controllers/quiz.controller.js");

    var router = require("express").Router();


    router.get("/", quiz.findAll);


    app.use('/api/quiz', router);
  };
