module.exports = app => {
    const contentfield   = require("../controllers/contentfield.controller.js");

    var router = require("express").Router();

    // module api endpoints.
    router.get("/", contentfield.findAll);
    router.get("/from_submodule_id/:p_submodule_id", contentfield.findFromSubmoduleId);

    app.use('/api/contentfield', router);
  };
