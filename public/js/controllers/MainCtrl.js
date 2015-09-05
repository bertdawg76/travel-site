angular.module('TravelSite').controller('MainCtrl', function ($scope, mainService) {
  $scope.test = 'I heart donuts';
  $scope.doLots = function () {
    mainService.doLots($scope.search).then(function (data) {
      $scope.places = data;
    });
  }
});

	