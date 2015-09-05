angular.module('TravelSite').controller('travelWarningCtrl', function ($scope, travelWarningService, TravelService) {
  $scope.getTravel = function () {
    travelWarningService.getTravel().then(function (data) {
      console.log(data);
      $scope.warnings = data;
    });
  };


  TravelService.get()

      .then(function(data){
        console.log('did work', data);
      }, function(error, status){
        console.log('did work', status);
      })
});