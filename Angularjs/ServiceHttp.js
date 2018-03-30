var app1=angular.module('myApp1'[]);
app1.controller('myCtrl1',function ($scope,$http) {
    $http.get("index2.html").then(function (response) {
      $scope.welcome=response.data();
    });
});
