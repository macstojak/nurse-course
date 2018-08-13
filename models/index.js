var mongoose = require('mongoose');
 mongoose.set('debug', true);
mongoose.connect("mongodb://localhost:27017/nurse_course", { useNewUrlParser: true });

mongoose.Promise = Promise;
module.exports.Address = require("./address");
module.exports.Course = require("./course");
module.exports.User = require("./user");
