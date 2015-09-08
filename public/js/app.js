angular.module('TravelSite', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial', 'ngMdIcons', 'ngSanitize', 'HiggidyCarousel']);

angular.module('TravelSite').config(['$urlRouterProvider', '$stateProvider', '$mdThemingProvider', function ($urlRouterProvider, $stateProvider, $mdThemingProvider) {

  $mdThemingProvider.theme('default')
            .primaryPalette('green')
            .accentPalette('red')
            .warnPalette('red', {
              'default': 'A400'
            });

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
      .state('doLots', {
        url: '/country/:countryCode',
        templateUrl: 'templates/doLots.html',
        controller: 'doLotsCtrl'
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