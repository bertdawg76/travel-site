angular.module('TravelSite', ['ui.router']);

angular.module('TravelSite').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider){

	$urlRouterProvider.otherwise('/');
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: 'templates/home.html',
		controller: 'MainCtrl'
	})
	.state('country', {
		url: '/country',
		templateUrl: 'templates/country.html',
		controller: 'CtrlCountry'
		
	})
}]);