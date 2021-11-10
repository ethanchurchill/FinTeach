module.exports = app => {
    const quizoptions   = require("../controllers/quizoptions.controller.js");

    var router = require("express").Router();


    router.get("/", quizoptions.findAll);


    app.use('/api/quizoptions', router);
  };
