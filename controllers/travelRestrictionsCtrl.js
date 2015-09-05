var q = require('q');
var http = require('http');
var parser = require('xml2json');

//Options for the RSS fee
var rssFeedConfig = {
  host: 'travel.state.gov',
  path: '/_res/rss/TWs.xml'
};

var restrictionCache;
var cacheDT;

module.exports = {
  getRestrictions: getRestrictions
};

function getRestrictions(req, res){
  var query = req.query;

  if(restrictionCache && cacheDT.getTime() > (new Date().getTime() - (1000*60*5))){
    res.json(restrictionCache);
  } else {
    getRestrictionXML().then(function(xml){
      restrictionCache = JSON.parse(parser.toJson(xml)).rss.channel.item;
      cacheDT = new Date();
      res.json(restrictionCache);
    });
  }
}

function getRestrictionXML() {
  var d = q.defer();

  http.request(rssFeedConfig, function (res) {
    var xml = '';
    res.on('data', function (chunk) {
      xml += chunk;
    });
    res.on('end', function () {
      d.resolve(xml);
    });
  }).end();

  return d.promise
}