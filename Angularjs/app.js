var routerApp1= angular.module('routerApp', ['ui.router','ngMaterial','ngMessages']);

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
      })
         .state('calculator',{
           url:'/calculator',
           templateUrl:'templates/CustomerJson.html',
           controller:'CalculatorController'
         })
         .state('material',{
           url:'/material',
           templateUrl:'templates/flex.html',
           controller:'YourController'
         })
         .state('flex',{
           url:'/flex',
           templateUrl:'templates/Flex.html',
           controller:'flexController'
         });

  });
