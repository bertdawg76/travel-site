var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var listSchema = new Schema ({
	countryCode: { type: String, maxlength: 20 },
	
	name: { type: String, maxlength: 100 },
	category: { type: String },
	list: { type: String, maxlength: 400 }

});

module.exports = mongoose.model('List', listSchema);
