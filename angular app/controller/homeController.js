app.controller('homeController', function($scope,$mdSidenav,jsonService) {
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');
  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }

  $scope.answer = jsonService.dashboardService();
  $scope.answer
    .then(function(response) {
      $scope.answer = response.data;
      console.log("$scope.answer", $scope.answer);
    });
});
