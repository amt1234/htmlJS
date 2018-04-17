app.controller('homeController', function($scope, $mdSidenav, jsonService, $state) {
  $scope.toggleLeft = buildToggler('left');
  $scope.toggleRight = buildToggler('right');
  // $scope.exists=toggle('answer','list');


  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
    };
  }
  $scope.selected = [];
    $scope.toggle = function(answer, list) {
      var idx = list.indexOf(answer);
      if (idx > -1) {
        list.splice(idx, 1);
      } else {
        list.push(answer);
      }
    };
    $scope.exists = function(answer, list) {
      return list.indexOf(answer) > -1;
    };
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
