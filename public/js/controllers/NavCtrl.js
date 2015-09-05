angular.module('TravelSite').controller('NavCtrl', function ($scope, $location, mainService) {
  $scope.tabs = [
    {label: "Home", url: 'home'},
    {label: "Country", url: 'country'},
    {label: "Travel Log", url: 'lists'},
    {label: "Travel Warnings", url: 'travelWarning'},
    {label: "Currency", url: 'money'}

  ];

  //Scope Functions
  $scope.goToTab = goToTab;


  function goToTab(tab) {
    $location.url("/" + tab.url);
  }

});

/*
 <div><a ui-sref="home" class="change">Home</a></div>
 <div><a ui-sref="country" class="change">Country</a></div>

 <div><a ui-sref="lists" class="change">Travel Log</a></div>
 <div><a ui-sref="travelWarning" class="change">Travel Warnings</a></div>
 <div><a ui-sref="money" class="change">Currency</a></div>
 <div><a ui-sref="login" class="change">Login</a></div>
 <div><a ui-sref="register" class="change">Register</a></div>
 <div><a ui-sref="logout" class="change">Logout</a></div>
 */

	