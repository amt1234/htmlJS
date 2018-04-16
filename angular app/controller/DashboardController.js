
app.controller('dashboardController', function($scope,$mdDialog) {

  console.log("CONTROLLER")
  $scope.imagePath = 'assets/fwdphoneimages';

  $scope.status = '  ';
  $scope.customFullscreen = false;
// });
$dialogs.showConfirmationDialog("Please confirm that you want to destroy your computer.", {
	title: "Destroy your computer?",
	buttonOkText: 'Yes, please do it!',
	buttonCancelText : 'Maybe later',
	callback: function(option){
		if(option === "ok"){
			alert("Installing Windows Vista...");
		}
	}
})
	});
