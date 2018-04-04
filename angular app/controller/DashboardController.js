angularApp1.controller('dashboardController', function($scope, Dashboard) {

  console.log("CONTROLLER")
  $scope.answer = Dashboard.dashboardService();
  $scope.answer
    .then(function(response) {
      $scope.answer = response.data;
      console.log("$scope.answer", $scope.answer);
    });

});
