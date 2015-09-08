angular.module('TravelSite').service('countryService', function ($http, $q) {

  this.getCountry = function (code) {
    var dfd = $q.defer();
    var options = {
      method: 'GET',
      url: '/country'
    };

    if(code != undefined){
      options.params = {
        countryCode: code
      };
    }

    $http(options).then(function (response) {
      dfd.resolve(response.data);
    }, function (err) {
      console.log('Error: ' + err);
    });
    return dfd.promise;
  };

  this.addCountry = function (body) {
    var dfd = $q.defer();
    $http({
      method: 'POST',
      url: '/country',
      data: body
    }).then(function (response) {
      console.log(response.data);
      dfd.resolve(response.data);
    }, function (error) {
      console.log('error: ' + error);
    });
    return dfd.promise;

  };

});















    

    
    
    
