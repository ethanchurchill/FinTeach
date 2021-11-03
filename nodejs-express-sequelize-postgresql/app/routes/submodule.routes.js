module.exports = app => {
    const submodule   = require("../controllers/submodule.controller.js");
  
    var router = require("express").Router();
  

    router.get("/", submodule.findAll);
 
  
    app.use('/api/submodule', router);
  };