var mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router({mergeParams: true}),
    passport = require("passport"),
    generator = require("generate-password"),
    db = require("../models");
    
router.get("/", function(req,res){
    res.render("index");
});
router.post("/subscribe", function(req, res){
    var username= req.body.firstname+"."+req.body.lastname;
    var password = generator.generate({
        length: 10,
        numbers: true
    })
    console.log(username)
    db.User.register(new db.User({ firstname : req.body.firstname, lastname:req.body.lastname, username: username, password: password, nrpwz: req.body.nrpwz, email:req.body.email, phone:req.body.phone}), password, function(err, user) {
        if (err) {
            req.flash("error", err.message);
            console.log(err.message)
            console.log(user)
            return res.render('index');
            
        }

        
            req.flash("success", "Zapisano dane, teraz wybierz szkolenia, które Cię interesują");
            res.redirect('/courses/course-list');
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
router.get("/courses/course-list", function(req, res){
    db.Course.find({}).sort("-type priority").exec(function(err, courses){
        if(err){
            console.log(err);
        }
         res.render("courses/course-list", {courses: courses})
    })
   
})
module.exports = router;