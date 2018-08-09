var mongoose= require("mongoose");
var autopopulate = require("mongoose-autopopulate");
var RoleSchema = new mongoose.Schema({
        role: String
    });
   
module.exports = mongoose.model("Role", RoleSchema);