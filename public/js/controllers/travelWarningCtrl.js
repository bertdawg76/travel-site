/*angular.module('TravelSite').controller('travelWarningCtrl', function ($scope, travelWarningService, TravelService) {
  $scope.getTravel = function () {
    travelWarningService.getTravel().then(function (data) {
      console.log(data);
      $scope.warnings = data;
    });
  };*/;




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
      $scope.warnings = data;
    });
  }

  function getMatches(text){
    return $filter('filter')($scope.warnings, text);
  }

});


<html lang="en">
    <head>
    <meta charset="UTF-8">
    <title>Example - example-example112-production</title>


    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular.min.js"></script>
    <script src="//ajax.googleapis.com/ajax/libs/angularjs/1.4.5/angular-sanitize.js"></script>
    <script src="script.js"></script>



    </head>
    <body ng-app="mySceApp">
    <div ng-controller="AppController as myCtrl">
    <i ng-bind-html="myCtrl.explicitlyTrustedHtml" id="explicitlyTrustedHtml"></i><br><br>
    <b>User comments</b><br>
By default, HTML that isn't explicitly trusted (e.g. Alice's comment) is sanitized when
$sanitize is available.  If $sanitize isn't available, this results in an error instead of an
exploit.
<div class="well">
    <div ng-repeat="userComment in myCtrl.userComments">
    <b>{{userComment.name}}</b>:
<span ng-bind-html="userComment.htmlComment" class="htmlComment"></span>
    <br>
    </div>
    </div>
    </div>
    </body>
    </html>

    (function(angular) {
      'use strict';
      angular.module('mySceApp', ['ngSanitize'])
          .controller('AppController', ['$http', '$templateCache', '$sce',
            function($http, $templateCache, $sce) {
              var self = this;
              $http.get("test_data.json", {cache: $templateCache}).success(function(userComments) {
                self.userComments = userComments;
              });
              self.explicitlyTrustedHtml = $sce.trustAsHtml(
                  '<span onmouseover="this.textContent=&quot;Explicitly trusted HTML bypasses ' +
                  'sanitization.&quot;">Hover over this text.</span>');
            }]);
    })(window.angular);

