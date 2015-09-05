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
    var re = new RegExp(req.query.searchTerm, 'i');
    List.find()
    .or([{ 'title': { $regex: re }}, { 'name': { $regex: re }}, { 'category': { $regex: re }}, { 'list': { $regex: re }}])
    .exec(function(err, result) {
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