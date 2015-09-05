angular.module('TravelSite', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial', 'ngMdIcons']);

angular.module('TravelSite').config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {

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
      .state('message', {
        url: '/message',
        templateUrl: 'templates/message.html',
        controller: 'messageCtrl'
      })
      .state('travelWarning', {
        url: '/travelWarning',
        templateUrl: 'templates/travelWarning.html',
        controller: 'travelWarningCtrl'
      })
      .state('lists', {
        url: '/lists',
        templateUrl: 'templates/lists.html',
        controller: 'listsCtrl'
      })
      .state('money', {
        url: '/money',
        templateUrl: 'templates/money.html',
        controller: 'moneyCtrl'
      })
      .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'loginCtrl'
      })
}]);