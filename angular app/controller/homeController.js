app.controller('homeController', function($scope, $mdSidenav, jsonService, $state) {
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }

  //SwitchFuction
  $scope.SwitchFuction = function(answer, selectlist, sno) {
    switch (sno) {
      case 'manufacturer':
        $scope.toggle(answer, selectlist);
        break;
      case 'storage':
        $scope.toggle(answer, selectlist);
        break;
      case 'os':
        $scope.toggle(answer, selectlist);
        break;
      case 'camera':
        $scope.toggle(answer, selectlist);
        break;
      default:

    }
  };

  // list for manufracture
  $scope.selectedManufracture = [];

  // list for Storage
  $scope.selectedStorage = [];

  // list for OS
  $scope.selectedOS = [];

  // list for Camera
  $scope.selectedCamera = [];

  //toggle function for selected list
  $scope.toggle = function(answer, list) {
    var index = list.indexOf(answer);
    if (index > -1) {
      list.splice(idx, 1);
    } else {
      list.push(answer);
    }

  };

  // http service
  $scope.answer = jsonService.dashboardService();
  $scope.answer
    .then(function(response) {
      $scope.answer = response.data;
      console.log("$scope.answer", $scope.answer);
    })
  $scope.dashboard = function() {
    $state.go('dashboard');
  }
});
// dynamicFilter on checkbox
app.filter('dynamicFilter', function() {
  return function(list, selectedManufracture, selectedStorage, selectedOS, selectedCamera) {
    var dynamicfiltered = [];
    var list2=[] ;
    console.log("manufacturer :", selectedManufracture);
    if ((selectedManufracture.length > 0) || (selectedStorage.length > 0) || (selectedOS.length > 0) || (selectedCamera.length > 0)) {
      for (var i = 0; i < list.length; i++) {
        var item = list[i];

        for (var j = 0; j < selectedManufracture.length; j++) {
          var selectedItem = selectedManufracture[j];
          if (item.specs.manufacturer == selectedItem) {
            dynamicfiltered.push(item);
            console.log("filtered value", dynamicfiltered);

          }
        }
      }
      console.log("dynamic filtered", dynamicfiltered);
      if (dynamicfiltered.length == 0) {
        list2 = list;
        console.log("list2 ", list2);
      }
       else {
      for(var i=0;i<dynamicfiltered.length;i++)
      {
        var itm=dynamicfiltered[i];
        console.log("itm",itm);
        list2.push(itm);
      }

      }

      for (var i = 0; i < list2.length; i++) {
        console.log("list length", list2.length);
        var item = list2[i];
        for (var k = 0; k < selectedStorage.length; k++) {
          var selectedItem = selectedStorage[k];
          if (item.specs.storage == selectedItem) {
            dynamicfiltered.push(item);
            console.log("filtered value storage", dynamicfiltered);
          }
        }
      }

      if (dynamicfiltered.length == 0) {
        list2 = list;
      }
       else {
         for(var i=0;i<dynamicfiltered.length;i++)
         {
           var itm=dynamicfiltered[i];
           console.log("itm",itm);
           list2.push(itm);
         }
        // list2 = dynamicfiltered;
      }

      for (var i = 0; i < list2.length; i++) {
        var item = list2[i];
        for (var l = 0; l < selectedOS.length; l++) {
          var selectedItem = selectedOS[l];
          if (item.specs.os == selectedItem) {
            dynamicfiltered.push(item);
            console.log("filtered value os", dynamicfiltered);
          }
        }
      }

      if (dynamicfiltered.length == 0) {
        list2 = list;
      }
      else {
        for(var i=0;i<dynamicfiltered.length;i++)
        {
          var itm=dynamicfiltered[i];
          console.log("itm",itm);
          list2.push(itm);
        }
        // list2 = dynamicfiltered;
      }

      for (var i = 0; i < list2.length; i++) {
        var item = list2[i];
        for (var m = 0; m < selectedCamera.length; m++) {
          var selectedItem = selectedCamera[m];
          if (item.specs.camera == selectedItem) {
            dynamicfiltered.push(item);
            console.log("filtered value camera", dynamicfiltered);
          }
        }
      }
    } else {
      return list;
    }
    console.log("dynamicfiltered", dynamicfiltered);
    return dynamicfiltered;
  }

});

// filter for unique values apply on checkbox
app.filter('uniqueString', function() {
  return function(items, keyword) {
    var filtered = [];

    for (var i = 0; i < items.length; i++) {
      var item = items[i];
      var flag = false;

      if (i == 0) {
        filtered.push(item);
      } else {
        for (var j = 0; j < filtered.length; j++) {
          var filteredItem = filtered[j];

          if (item.specs[keyword] == filteredItem.specs[keyword]) {
            flag = true;
          }
          console.log(item.specs[keyword]);
        }

        if (!flag) {
          filtered.push(item);
        }
      }

    }

    return filtered;
  };

});

// app.filter('dynamicFilter', function() {
//   return function(list, keyword) {
//     var dynamicList = [];
//     for (var i = 0; i < list.length; i++) {
//
//   console.log("filtered",list);
//       var flag=false;
//     }
//   if (i==0) {
//     dynamicList.push(item);
//   }
//   if(selectedManufracture==null)
//   {
//     dynamicFilter.push(selectedManufracture);
//   }
//   else if(selectedStorage)
//   if(item.specs[keyword]==filteredItem.specs[keyword]){
//     flag=true;
//     console.log("dynamicFilter");
//   }
//   // if (selectedManufracture == null) {
//   //   dynamicList.push(item);
//   // }
//   }
// });
