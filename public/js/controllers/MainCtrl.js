angular.module('TravelSite').controller('MainCtrl', function ($scope) {

   $scope.images = [
            {
              src: "../photos/map5.jpg",
              alt: "image 1",
              link: "#/country",
              title: "I heart donuts"
              
            },
            {
              src: "../photos/machuPichu.jpg",
              alt: "image 2",
              link: "#/lists",
              title: ""
            },
            {
              src: "../photos/warning.jpg",
              alt: "image 3",
              link: "#/travelWarning",
              title: ""
            },
            {
              src: "../photos/currency2.jpg",
              alt: "image 3",
              link: "#/money",
              title: ""
            }
          ]
});














/*.controller('MainCtrl', function ($scope) {
  $scope.test = 'I heart donuts';
  $scope.doLots = function () {
    mainService.doLots($scope.search).then(function (data) {
      $scope.places = data;
    });
  }
});*/
