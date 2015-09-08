var Country = require('../models/country');

module.exports = {

  create: function(req, res) {
    var newCountry = new Country(req.body);
    newCountry.save(function(err, result) {
      if (err){
        console.log('Error CREATING country', JSON.stringify(err.errors));
        return res.status(500).send(err);
      } 
      else res.send(result);
    });
  },

  read: function(req, res) {
    var query = {};

    if(req.query && req.query.countryCode){
      query.tag = req.query.countryCode.toUpperCase();
    }

    Country.find(query)
    .exec(function(err, result) {
      if (err){
        console.log('Error GETTING country', JSON.stringify(err.errors));
        return res.status(500).send(err);
      } 
      else res.send(result);
    });
  },

  update: function(req, res) {
    Country.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err){
        console.log('Error UDPATING country', JSON.stringify(err.errors));
        return res.status(500).send(err);
      } 
      
      else res.send(result);
    });
  },

  delete: function(req, res) {
    Country.findByIdAndRemove(req.params.id, function(err, result) {
      if (err){
        console.log('Error DELETING country', JSON.stringify(err.errors));
        return res.status(500).send(err);
      } 
      
      else res.send(result);
    });
  }
};
