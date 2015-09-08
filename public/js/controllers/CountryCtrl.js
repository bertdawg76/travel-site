angular.module('TravelSite').controller('CtrlCountry', function ($scope, countryService, $filter, $stateParams) {


 console.log("stateParams", $stateParams);

  //Do Lots Of THings with $stateParams.countryCode
 //put $stateParams back in top
  // //API
  $scope.addCountry = addCountry;
  $scope.getCountry = getCountry;
  $scope.getMatches = getMatches;

  init();

  function init(){
    getCountry();
  }

  function addCountry(country) {
    countryService.addCountry(country).then(function (res) {

    });
  }

  function getCountry() {
    countryService.getCountry().then(function (data) {
      $scope.countries = data;
    });
  }

  function getMatches(text){
    return $filter('filter')($scope.countries, text);
  }

});

