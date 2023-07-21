module.exports = app => {
    const drinks = require("../controllers/drink.controller.js");
  
    var router = require("express").Router();
  
    // Retrieve all
    router.get("/", drinks.findAll);
  
    // Retrieve all featured drinks 
    router.get("/featured", drinks.findFeatured);
  
    // Retrieve a single drink with id
    router.get("/:id", drinks.findOne);

    router.get('/tag/:tag', drinks.findTag)
  
    app.use("/api/drinks", router);
  };