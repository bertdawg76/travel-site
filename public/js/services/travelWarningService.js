angular.module('TravelSite').service('travelWarningService', function ($http, $q) {
  this.getTravel = function () {
    var dfd = $q.defer();

    $http({
      method: 'GET',
      url: '/travelWarning'
    }).success(function (response) {
      console.log('SUCCESS ON SERVICE!!! ', response);
      dfd.resolve(response);
    }).error(function (err) {
      console.log('FAILURE ON SERVICE!!! ', err)
      dfd.reject(err)
    })
    return dfd.promise;
  }
});