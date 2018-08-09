var mongoose= require("mongoose");
var autopopulate = require("mongoose-autopopulate");
var AddressSchema = new mongoose.Schema({
        streetname: String,
        nrblock: Number,
        nrflat: Number,
        zipcode: String,
        town: String
    });
   
module.exports = mongoose.model("Role", AddressSchema);