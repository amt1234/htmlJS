app.controller('dashboardController', function($scope, $mdDialog) {

  console.log("CONTROLLER")
  $scope.imagePath = 'assets/images';

  $scope.status = '  ';
  $scope.customFullscreen = false;

  $scope.showAdvanced = function(ev,data) {
   $mdDialog.show({
     locals:{dataToPass: data}, //here where we pass our data
     controller: DialogController,
     templateUrl: 'templates/dialogtemp.html',
     parent: angular.element(document.body),
     targetEvent: ev,
     clickOutsideToClose:true
   })
   .then(function(answer){}, function() {

   });
 };

function DialogController($scope, $mdDialog,dataToPass) {
console.log('>>>>>>> '+dataToPass);
}
});
