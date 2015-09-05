angular.module('TravelSite').controller('moneyCtrl', function ($scope, RateInfoService, numberFilter, $q) {

  var namesPromise = RateInfoService.getRateInfo('currencies');
  var ratesPromise = RateInfoService.getRateInfo('latest');

  // Use the $q.all method to run code only when both promises have been resolved
  $q.all([namesPromise, ratesPromise]).then(function (responses) {
    RateInfoService.combineRateInfo(responses[0], responses[1].rates)
        .then(function (rateData) {
          $scope.rateData = rateData;
        })
  });

  $scope.getCurrencyLabel = function (code, value) {
    return $scope.currencyNames[code] + " (" + numberFilter(value, 2) + " / USD)";
  };

  $scope.calcCurrency = function () {
    return $scope.fromVal / $scope.fromCurrency * $scope.toCurrency;
  };
});


/*$scope.getMoney = function(){
 moneyService.getMoney().then(function(dataFromService){
 $scope.currencyValues = dataFromService;

 });
 }

 $scope.getValue = function(){
 moneyService.getValue().then(function(dataFromService){
 $scope.currencyNames = dataFromService;
 });
 }

 $scope.getCurrencyLabel = function(code, value) {
 return $scope.currencyNames[code] + " (" + numberFilter(value, 2) + " / USD)";
 };

 $scope.calcCurrency = function() {
 return $scope.fromVal / $scope.fromCurrency * $scope.toCurrency;
 };

 });*/