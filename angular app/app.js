var app = angular.module('angularApp', ['ui.router', 'ngMaterial', 'ngMessages', 'ngAnimate']);

app.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    //  STATES AND NESTED VIEWS
    .state('login', {
      url: '/login',
      templateUrl: 'templates/Login.html',
      controller: 'loginController'
    })
    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: 'homeController'
    })
    .state('home.dashboard', {
      url: '/dashboard',
      templateUrl: 'templates/dashboard.html',
      controller: 'dashboardController'
    });

  $urlRouterProvider.otherwise('/login');
});
