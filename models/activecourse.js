var mongoose= require("mongoose");
var autopopulate = require("mongoose-autopopulate");
var ActivecourseSchema = new mongoose.Schema({
        course: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Activecourse"
        },
        startdate: String,
        enddate: String,
        examdate: String,
        code: String,
        price: String,
        priceverbally: String,
        active: String
    });
module.exports = mongoose.model("Activecourse", ActivecourseSchema);