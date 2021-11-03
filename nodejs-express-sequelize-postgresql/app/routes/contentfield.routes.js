module.exports = app => {
    const contentfield   = require("../controllers/contentfield.controller.js");
  
    var router = require("express").Router();
  

    router.get("/", contentfield.findAll);
 
  
    app.use('/api/contentfield', router);
  };