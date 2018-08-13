var mongoose= require("mongoose");
var autopopulate = require("mongoose-autopopulate");
var CourseSchema = new mongoose.Schema({
        type: String,
        short: String,
        name: String,
        price: String,
        priceverbally: String,
        group: String,
        priority: Number
    });

module.exports = mongoose.model("Course", CourseSchema);