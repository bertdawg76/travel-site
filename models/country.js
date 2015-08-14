var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema ({
  name: { type: String },
  population: { type: Number,  maxlength: 20 },
  travel_warnings: { type: String },
  visa: { type: String, enum: [ 'Yes', 'No']},
  vaccinations: { type: String }

});

    
    
  

module.exports = mongoose.model('Country', countrySchema);
