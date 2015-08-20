angular.module('TravelSite').service('countryService', ['$http', '$q', function($http, $q) {

  this.getCountry = function() {
      var dfd = $q.defer();
      $http({
          method: 'GET',
          url: '/country'
      }).then(function(response) {
       console.log(response.data);
       dfd.resolve(response.data);
    }, function(err) {
      console.log('Error: ' + err);
    });
      return dfd.promise;
  };
  this.addCountry = function(body) {
    var dfd = $q.defer();
    $http({
      method: 'POST',
      url: '/country',
      data: body
    }).then(function(response){
      console.log(response.data);
      dfd.resolve(response.data);
    }, function(error) {
      console.log('error: ' + error);
    });
    return dfd.promise;

  };

}]);















    

    
    
    
