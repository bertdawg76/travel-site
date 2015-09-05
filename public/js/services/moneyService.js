angular.module('TravelSite')
    .constant('apiKey', '?app_id=cc3461c909f740d8abb377a41b43705e')
    .constant('openExchangeRatesUrl', 'http://openexchangerates.org/api/')

// Provide a factory function that will be called to create a singleton getRateInfo service
    .factory('RateInfoService', function (apiKey, openExchangeRatesUrl, $http, $q) {

      return {
        getRateInfo: getRateInfo,
        combineRateInfo: combineRateInfo
      };

      function getRateInfo(type) {
        return $http.get(openExchangeRatesUrl + type + '.json' + apiKey).then(function (response) {
          return response.data;
        });
      };

      function combineRateInfo(names, rates) {
        var data = [];
        for (var key in names) {
          data.push({name: names[key], rate: rates[key], abbrev: key});
        }
        var deferred = $q.defer();
        deferred.resolve(data);
        return deferred.promise;
      }
    });


/*.service('moneyService', function($http, $q) {

 this.getMoney = function() {
 var dfd = $q.defer();
 $http({
 method: 'GET',
 url: 'https://openexchangerates.org/api/latest.json?app_id=cc3461c909f740d8abb377a41b43705e'
 }).then(function(response) {
 console.log(response);
 dfd.resolve(response.data);
 }, function(err) {
 console.log('Error: ' + err);

 });
 return dfd.promise;
 };

 this.getValue = function() {
 var dfd = $q.defer();
 $http({
 method: 'GET',
 url: 'https://openexchangerates.org/api/currencies.json?app_id=cc3461c909f740d8abb377a41b43705e'
 }).then(function(response){
 console.log(response);
 dfd.resolve(response.data.rates);
 }, function(err) {
 console.log('Error: ' + err);

 });
 return dfd.promise;
 }
 });*/