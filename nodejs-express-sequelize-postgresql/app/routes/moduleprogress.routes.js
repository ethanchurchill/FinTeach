module.exports = app => {
    const moduleprogress   = require("../controllers/moduleprogress.controller.js");
  
    var router = require("express").Router();
  

    router.get("/", moduleprogress.findAll);
 
  
    app.use('/api/moduleprogress', router);
  };