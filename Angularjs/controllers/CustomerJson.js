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
        $scope.answer = Calculator.square();
        $scope.answer
        .then(function (response) {
          $scope.answer=response.data;
          console.log("$scope.answer",$scope.answer);
        });
    // }
});
// routerApp1.controller("readJsonCtrl",function($scope,JsonService)
//  {
//   $scope.jsonRead=function(){
//     $scope.name="1234";
//      $scope.json = JsonService.read();
//
//      $scope.json
//      .then(function(response) {
//         $scope.json=response.data;
//        });
