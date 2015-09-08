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
    res.json(filterRestrictionCache(req.query));
  } else {
    getRestrictionXML().then(function(xml){
      restrictionCache = JSON.parse(parser.toJson(xml)).rss.channel.item;
      cacheDT = new Date();
      res.json(filterRestrictionCache(req.query));
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

function filterRestrictionCache(query) {
  if(query != undefined && query.countryCode != undefined) {
    return restrictionCache.filter(function(r) {
      return r["dc:identifier"] == query.countryCode;
    })
  }
  else{
    return restrictionCache;
  }
}