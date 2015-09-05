var travelWarning = require('../models/warning');

module.exports = {
 
  read: function(req, res) {
    console.log('&&&&&&&&&&&&&&&&& read function invoked ', req.body)
    travelWarning.find(req.query)
    .exec(function(err, result){
      if (err){
        console.log('Error GETTING TravelWarnings', JSON.stringify(err.errors));
        return res.status(500).send(err);
      }
      else res.send(result);
    });
  },

  create: function(req,res) {
    console.log(req.body)
    var newWarning = new travelWarning(req.body);
    newWarning.save(function(err, result){
      if(err) return res.status(500).send(err);
      else res.send(result);
    });
  }
  /*read: function(req, res) {
    TravelAlerts.find(req.query)
    .exec(function(err, result) {
      if (err){
        console.log('Error GETTING TravelAlerts', JSON.stringify(err.errors));
        return res.status(500).send(err);
      } 
      else res.send(result);
    });
  }*/

};

































/*var parseString = require('xml2js').parseString;
var http = require('http');

http.get("http://travel.state.gov/_res/rss/TAs.xml", function(res){
    
  res.setEncoding('utf8');
  var xml = "";
    res.on('data', function (chunk) {
      xml+=chunk;
    });
    response.on('end', function () {
      parseString(xml, function(err, data){
        if(err) return "THERE WAS AN ERROR";
        console.log("JSON DATA", data);
      })
    });

});*/