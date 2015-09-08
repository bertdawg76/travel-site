var List = require('../models/lists');

module.exports = {

	create: function(req, res) {
    var newList = new List(req.body);
    newList.save(function(err, result) {
      if (err){
        console.log('Error CREATING List', JSON.stringify(err.errors));
        return res.status(500).send(err);
      } 
      else res.send(result);
    });
  },

  read: function(req, res) {
    console.log(req.query);
    var mongoRequest = List.find();

    if(req.query && req.query.searchTerm){
      var search = new RegExp(req.query.searchTerm, 'i');  
      mongoRequest.or([{ 'countryCode': { $regex: search }}, { 'name': { $regex: search }}, { 'category': { $regex: search }}, { 'list': { $regex: search }}])
    }

    if(req.query && req.query.countryCode){
      mongoRequest.or([{ 'countryCode': req.query.countryCode}])
    }
    
    mongoRequest.exec(function(err, result) {
      if (err){
        console.log('Error GETTING List', JSON.stringify(err.errors));
        return res.status(500).send(err);
      } 
      else res.send(result);
    });
  },

  update: function(req, res) {
    List.findByIdAndUpdate(req.params.id, req.body, function(err, result) {
      if (err){
        console.log('Error UDPATING country', JSON.stringify(err.errors));
        return res.status(500).send(err);
      } 
      
      else res.send(result);
    });
  },

  delete: function(req, res) {
    List.findByIdAndRemove(req.params.id, function(err, result) {
      if (err){
        console.log('Error DELETING List', JSON.stringify(err.errors));
        return res.status(500).send(err);
      } 
      
      else res.send(result);
    });
  }



};