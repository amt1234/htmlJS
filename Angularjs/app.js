var routerApp1= angular.module('routerApp', ['ui.router']);

routerApp1.config(function($stateProvider) {

    $stateProvider

        //  STATES AND NESTED VIEWS
        .state('register', {
            url: '/register',
            templateUrl:'templates/Register.html',
        controller:'registerController'
        })
        .state('login',{
          url:'/login',
          templateUrl:'templates/Login.html',
        controller:'loginController'
        });
  });
