angular.module('TravelSite').service('listsService', ['$http', '$q', function ($http, $q, $modal) {

  this.getList = function (term) {
    var dfd = $q.defer();
    $http({
      method: 'GET',
      url: '/lists',
      params: {searchTerm: term}
    }).then(function (response) {
      console.log(response.data);
      dfd.resolve(response.data);
    }, function (err) {
      console.log('Error: ' + err);
    });
    return dfd.promise;
  };
  this.addList = function (body) {
    var dfd = $q.defer();
    $http({
      method: 'POST',
      url: '/lists',
      data: body
    }).then(function (response) {
      console.log(response.data);
      dfd.resolve(response.data);
    }, function (error) {
      console.log('error: ' + error);
    });
    return dfd.promise;

  };

}]);