app.controller('dashboardController', function($scope, $mdDialog) {

  console.log("CONTROLLER")
  $scope.imagePath = 'assets/images';

  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showAdvanced = function(event4,data) {
   $mdDialog.show({
     locals:{item: data}, //here where we pass our data
     controller: DialogController,
     templateUrl: 'templates/dialogtemp.html',
     parent: angular.element(document.body),
     targetEvent: event4,
     clickOutsideToClose:true
   });
 };

function DialogController($scope, $mdDialog,item) {
  $scope.data = item;
  console.log(item);
  $scope.cancel = function() {
      $mdDialog.cancel();
    };
}
});
