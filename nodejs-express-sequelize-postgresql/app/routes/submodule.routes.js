module.exports = app => {
    const submodule   = require("../controllers/submodule.controller.js");

    var router = require("express").Router();

    // submodule api endpoints.
    router.get("/", submodule.findAll);
    router.get("/from_module_id/:p_module_id", submodule.findFromModuleId);

    app.use('/api/submodule', router);
  };
