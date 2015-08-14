var mongoose = require('mongoose');

var countrySchema = new mongoose.Schema ({
  name: { type: String },
  population: { type: Number,  maxlength: 20 },
  travel warnings: { type: String },
  visa: { type: String, enum: [ 'Yes', 'No']}

});

    
    
  

module.exports = mongoose.model('Country', countrySchema);
