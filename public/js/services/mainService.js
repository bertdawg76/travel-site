angular.module('TravelSite').service('mainService', function ($http, $q) {

  this.doLots = function (search) {
    var allInfo = {}
    getTravel().then(function (data) {
      allInfo.travelWarnings = data
    })
    getList().then(function (data) {
      allInfo.listData = data
    }).then(function () {
      console.log(allInfo)

    })
    getCountry().then(function (data) {
      allInfo.countryData = data
    })

  }


  var getTravel = function () {
    console.log("getting stuff")
    return $http({
      method: 'GET',
      url: '/travelWarning'
    })
  }

  var getList = function () {

    return $http({
      method: 'GET',
      url: '/lists'
    })
  }
  var getCountry = function () {
    console.log("getting country")
    return $http({
      method: 'GET',
      url: '/country'
    })
  };
});

