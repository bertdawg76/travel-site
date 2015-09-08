/*angular.module('TravelSite').controller('travelWarningCtrl', function ($scope, travelWarningService, TravelService) {
  $scope.getTravel = function () {
    travelWarningService.getTravel().then(function (data) {
      console.log(data);
      $scope.warnings = data;
    });
  };*/




angular.module('TravelSite').controller('travelWarningCtrl', function ($scope, travelWarningService, $filter, $sce) {

  //API
  $scope.getTravel = getTravel;
  $scope.getMatches = getMatches;

  init();

  function init(){
    getTravel();
  }

  function getTravel() {
    travelWarningService.getTravel().then(function (data){
      console.log(data);
      $scope.warnings = data;
    });
  }

  function getMatches(text){
    return $filter('filter')($scope.warnings, text);
  }

});


