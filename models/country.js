var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var countrySchema = new Schema ({
  title: { type: String },
  population: { type: String,  maxlength: 20 },
  capitol: { type: String },
  area: { type: String },
  language: { type: String },
  religion: { type: String },
  currency: { type: String },
  gdp: { type: String },
  description: { type: String },
  dish: { type: String },
  flag: { type: String },
  map: { type: String }

});

    
    
  

module.exports = mongoose.model('Country', countrySchema);
