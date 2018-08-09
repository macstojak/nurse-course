var mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router({mergeParams: true}),
    passport = require("passport"),
    db = require("../models");
    
router.get("/", function(req,res){
    res.render("index");
});
router.post("/subscribe", function(req, res){
    var username= req.body.firstname+"."+req.body.lastname;
    db.User.register(new db.User({ firstname : req.body.firstname, lastname:req.body.lastname, username: username, nrpwz: req.body.nrpwz, email:req.body.email, phone:req.body.phone}), req.body.password, function(err, user) {
        if (err) {
            req.flash("error", err.message);
            return res.render('index');
            
        }

        passport.authenticate('local')(req, res, function () {
            req.flash("success", "Zapisano dane, teraz wybierz szkolenia, które Cię interesują");
            res.redirect('/courses/course-list');
        });
    });
})
router.post("/register", function(req, res){
    var username= req.body.firstname+"."+req.body.lastname;
    db.User.register(new db.User({ firstname : req.body.firstname, lastname:req.body.lastname, username: username, nrpwz: req.body.nrpwz, email:req.body.email, phone:req.body.phone}), req.body.password, function(err, user) {
        if (err) {
            req.flash("error", err.message);
            return res.render('index');
            
        }

        passport.authenticate('local')(req, res, function () {
            req.flash("success", "Witaj w systemie OMNI-MED szkolenia, "+ user.firstname + " "+ user.lastname);
            res.redirect('/');
        });
    });
})

module.exports = router;