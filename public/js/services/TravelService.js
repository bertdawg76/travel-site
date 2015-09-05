angular.module('TravelSite')
    .factory('TravelService', function ($http) {
      return {
        get: function () {
          return $http.get('http://travel.state.gov/_res/rss/TWs.xml')
              .then(function (data, status) {
                console.log("Request succeeded", data);

              }, function (data, status) {
                console.log("Request failed " + status);
              });

        }
      };
    });


//var AppController = function ($scope, DataSource) {
//
//  SOURCE_FILE = "guitars.xml";
//
//  $scope.IMAGE_LOCATION = "http://rabidgadfly.com/assets/angular/xmlload/";
//
//  xmlTransform = function (data) {
//    console.log("transform data");
//    var x2js = new X2JS();
//    var json = x2js.xml_str2json(data);
//    return json.warning.warning;
//  };
//
//  setData = function (data) {
//    $scope.dataSet = data;
//    console.log($scope.dataSet.length);
//    console.log($scope.dataSet);
//  };
//
//  DataSource.get(SOURCE_FILE, setData, xmlTransform);
//
//};