angular.module('TravelSite').controller('moneyCtrl', function ($scope, RateInfoService, numberFilter, $q, $filter) {

  //Scope Vars
  var rateData = [];
  $scope.newRate = 0;

  //API
  $scope.getCurrencyLabel = getCurrencyLabel;
  $scope.calcCurrency = calcCurrency;
  $scope.getMatches = getMatches;
  $scope.calcNewRate = calcNewRate;

  init();

  function init(){
    var namesPromise = RateInfoService.getRateInfo('currencies');
    var ratesPromise = RateInfoService.getRateInfo('latest');

    // Use the $q.all method to run code only when both promises have been resolved
    $q.all([namesPromise, ratesPromise]).then(function (responses) {
      RateInfoService.combineRateInfo(responses[0], responses[1].rates)
          .then(function (res) {
            rateData = res;
          });
    });
  }


  function getCurrencyLabel(code, value) {
    return $scope.currencyNames[code] + " (" + numberFilter(value, 2) + " / USD)";
  }

  function calcCurrency() {
    return $scope.fromVal / $scope.fromCurrency * $scope.toCurrency;
  }

  function getMatches(text){
    return $filter('filter')(rateData, text);
  }

  function calcNewRate(rate1, rate2){
    if(rate1 == undefined || rate1.length == 0 || rate2 == undefined || rate2.length == 0 || $scope.amount == undefined || $scope.amount == 0) return;

    $scope.newRate = ($filter('number')( ($scope.amount * (rate2.rate / rate1.rate)), 2)) + ' '+ rate2.abbrev;
  }
});