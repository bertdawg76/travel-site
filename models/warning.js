var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var travelWarningSchema = new Schema ({
	title: { type: String },
	pubDate: { type: String },
	//description: { type: String }
	});

module.exports = mongoose.model('TravelWarning', travelWarningSchema);


/*new Schema({ url: String, text: String, id: Number}, 
          { collection : 'question' });   // collection name
new Schema({ url: String, text: String, id: Number}, 
           { collection : 'question' });   // collection name
or model mapped:

mongoose.model('Question', 
               new Schema({ url: String, text: String, id: Number}), 
               'question');     // collection name*/
