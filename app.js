var express     = require("express"),
 methodOverride = require("method-override"),
    app         = express(),
    passport    = require("passport"),
    bodyParser  = require("body-parser"),
    mongoose    = require("mongoose"),
    LocalStrategy = require("passport-local"),
    path = require("path"),
    User = require("./models/user"),
    flash       = require("connect-flash"),
     seedDB      = require("./import");
    // seedDB();
  
//routes in here VVVV    

var indexRoutes = require("./routes/index")
    


app.use(bodyParser.urlencoded({extended: true})); //
app.set("view engine", "ejs"); //parse ejs files extentions
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));
app.use(methodOverride("_method")); //override method=DELETE or method=PUT
app.use(flash()); //flash messages
app.use(require("express-session")({
    secret: "There you go",
    resave: false,
    saveUninitialized: false
})); //express-session

app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

//STORE LOCAL VARIABLES
app.use(function(req, res, next){
   res.locals.currentUser = req.user;
   res.locals.error = req.flash("error");
   res.locals.success = req.flash("success");
   next();
});

app.use("/", indexRoutes);


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Nurse Course database has started!");

});


