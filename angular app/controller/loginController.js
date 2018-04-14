  app.controller('loginController', function($scope, $state) {
    $scope.user = {
      name: "",
      password: ""
    }
    //$state function call
    $scope.login = function() {
      $state.go('home');
    }
  });
