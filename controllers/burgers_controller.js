var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    
    db.Burger.findAll({}).then(function(dbBurger) {
        console.log("hello from line 12");
        console.log(dbBurger[0].dataValues);
        res.render("index", { burger_data: dbBurger });
    });

    //burger.all(function (burgerData) {
        
        //res.render("index", { burger_data: burgerData });
    //});
});

router.post("/burgers/create", function (req, res) {
    console.log("hello from line 24");
    console.log(req.body);
  

    //db.Burger.create(req.body).then(function(dbBurger) {
      //  console.log(dbBurger);
      //});
    db.Burger.create({
        burger_name: req.body.burger_name
    }).then( function (result) {

       console.log(result);
       res.redirect("/");
   });
});


// router.put("/burgers/:id", function (req, res) {
//     burger.update(req.params.id, function (result) {
       
//         console.log(result);
        
//         res.sendStatus(200);
//     });
// });

module.exports = router;