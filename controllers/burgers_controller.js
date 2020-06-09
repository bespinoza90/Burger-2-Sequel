var express = require("express");

var router = express.Router();
var db = require("../models");


router.get("/", function (req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function (req, res) {
    
    db.Burger.findAll({raw:true}).then(function (burgerData) {
    

        res.render("index", { burger_data: burgerData });
    });
});

router.post("/burgers/create", function (req, res) {
    
    db.Burger.create({name:req.body.burger_name, devoured: false}).then(function (result) {
        
        console.log(result);
        res.redirect("/");
    });
});


router.put("/burgers/:id", function (req, res) {
   
    db.Burger.update({devoured:true},{
        where:{id:req.params.id},
        
    }).then(function(){
        
        res.end()
    });
});

module.exports = router;