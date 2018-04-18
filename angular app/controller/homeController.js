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

app.filter('dynamicFilter',function(){
  return function(list,selectedManufracture){
    var dynamicfiltered=[];
    console.log(selectedManufracture);
    if(selectedManufracture.length>0)
    {
    for(var i=0;i<list.length;i++)
    {
      var item=list[i];
      for(var i=0;i<selectedManufracture.length;i++)
      {
        var selectedItem=selectedManufracture[i];
         if(item.specs.manufacturer==selectedItem)
         {
           dynamicfiltered.push(selectedItem);
           console.log("filtered value",dynamicfiltered);
         }
      }

    }
    }else {
      return list;
    }
    // else if(!selectedStorage==null)
    // {
    //   dynamicfiltered.push(selectedStorage);
    // }
    // else if (!selectedOS==null) {
    //   dynamicfiltered.push(selectedOS);
    // }
    console.log("dynamicfiltered",dynamicfiltered);
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
