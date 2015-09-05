angular.module('TravelSite').controller('travelWarningCtrl', function ($scope, travelWarningService) {
  $scope.getTravel = function () {
    travelWarningService.getTravel().then(function (data) {
      console.log(data);
      $scope.warnings = data;
    });
  };
});