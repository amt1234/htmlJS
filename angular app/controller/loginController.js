  angularApp1.controller('loginController', function($scope, $state) {
    $scope.user = {
      name: "",
      password: ""
    }
    //$state function call
    $scope.login = function() {
      console.log("hello");
      $state.go('dashboard');
    }
  });
