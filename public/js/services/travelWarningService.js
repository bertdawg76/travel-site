angular.module('TravelSite').service('travelWarningService', function ($http, $q) {
  this.getTravel = function (countryCode) {
    var dfd = $q.defer();
    var options = {
      method: 'GET',
      url: '/travel-restrictions'
    }
    if(countryCode != undefined){
      options.params = {
        countryCode: countryCode
      }
    }
    $http(options).success(function (response) {
      console.log('SUCCESS ON SERVICE!!! ', response);
      dfd.resolve(response);
    }).error(function (err) {
      console.log('FAILURE ON SERVICE!!! ', err)
      dfd.reject(err)
    })
    return dfd.promise;
  }
});