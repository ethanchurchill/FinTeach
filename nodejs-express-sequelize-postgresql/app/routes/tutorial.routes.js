module.exports = app => {
    const module   = require("../controllers/tutorial.controller.js");
  
    var router = require("express").Router();
  

    router.get("/", module.findAll);
 
  
    app.use('/api/modules', router);
  };