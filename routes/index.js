var mongoose = require("mongoose"),
    express = require("express"),
    router = express.Router({mergeParams: true});
    
router.get("/", function(req,res){
    res.render("index");
})

module.exports = router;