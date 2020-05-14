var express = require("express");
var router = express.Router();
var db = require("../models");

router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    
    db.Burger.findAll({}).then(function(dbBurger) {
        console.log(dbBurger);
        // res.render("index", { burger_data: dbBurger });
    });

    //burger.all(function (burgerData) {
        
        //res.render("index", { burger_data: burgerData });
    //});
});

router.post("/burgers/create", function (req, res) {
    
  

    db.Burger.create(req.body).then(function(dbBurger) {
        res.json(dbBurger);
      });
    //burger.create(req.body.burger_name, function (result) {

       // console.log(result);
       // res.redirect("/");
   // });
});


// router.put("/burgers/:id", function (req, res) {
//     burger.update(req.params.id, function (result) {
       
//         console.log(result);
        
//         res.sendStatus(200);
//     });
// });

module.exports = router;