// var app=angular.module('JsonApp',[]);
// app.controller('JsonCtrl',function($scope) {
// $scope.customer={
//   "name":"poonam",
//   "city":"mumbai"
// };
// });
// /*$scope.parJson = function(json) {
//       return JSON.parse(json);
//     }
// */
//var routerApp1= angular.module('routerApp', ['CalculatorService']);
routerApp1.controller('CalculatorController', function ($scope, Calculator) {

    // $scope.findSquare = function () {
    console.log("CONTROLLER")
        $scope.answer = Calculator.square(welcome);
    // }
});
