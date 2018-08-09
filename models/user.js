var mongoose= require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose"),
    autopopulate = require("mongoose-autopopulate");
var UserSchema = new mongoose.Schema({
        username: String,
        password: String,
        firstname: String,
        lastname: String,
        pesel: String,
        nrpwz: String,
        email: String,
        phone: String,
        addresses: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Address",
                autopopulate: true
        }],
        courses: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Activecourse",
                autopopulate: true
        }],
        roles: [{
                type: mongoose.Schema.Types.ObjectId,
                ref: "Role"
        }],
        sex: String,
        dateofbirth: Date
    });
    UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);