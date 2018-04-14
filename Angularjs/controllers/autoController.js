// var routerApp1=angular.module( 'routerApp', [ 'ngMaterial', 'ngMessages' ] );
//   routerApp1.controller("YourController",function ($scope) {
//     $scope.messages1="angular material";
//
//     // var employee={
//     //   firstname:"david",
//     //   lastname:"abc"
//     // };
//     // $scope.employee=employee;
//   } );
  angular.module('routerApp')

  .controller('YourController', function($scope) {
    $scope.title1 = 'Button';
    $scope.title4 = 'Warn';
    $scope.isDisabled = true;

    $scope.googleUrl = 'http://google.com';

  });
