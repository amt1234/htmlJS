var angularApp1 = angular.module('angularApp', ['ui.router', 'ngMaterial', 'ngMessages','ngAnimate']);

angularApp1.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    //  STATES AND NESTED VIEWS
    .state('login', {
      url: '/login',
      templateUrl: 'templates/Login.html',
      controller: 'loginController'
    })
    .state('dashboard', {
      url: '/dashboard',
      templateUrl: 'templates/dashboard.html',
       controller: 'dashboardController'
    });

  $urlRouterProvider.otherwise('/login');
});
