app.controller('homeController', function($scope, $mdSidenav, jsonService,$state) {
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
    })
    $scope.dashboard = function() {
      $state.go('dashboard');
    }
});
  // app.filter('uniqueString', function() {
  //   return function(items, keyword) {
  //     var filtered = [];
  //
  //     for (var i = 0; i < items.length; i++) {
  //       var item = items[i];
  //       var flag = false;
  //
  //       if (i == 0) {
  //         filtered.push(item);
  //       } else {
  //         for (var j = 0; j < filtered.length; j++) {
  //           var filteredItem = filtered[j];
  //
  //           if (item.specs[keyword] == filteredItem.specs[keyword]) {
  //             flag = true;
  //           }
  //           console.log(item.specs[keyword]);
  //         }
  //
  //         if (!flag) {
  //           filtered.push(item);
  //         }
  //       }
  //
  //     }
  //
  //     return filtered;
  //   };
  // });

  //create checkbox filters on the fly with dynamic data
  app.filter('uniqueString', function() {
  var filters = [];
  _.each(answer, function(product) {
    _.each(product.properties, function(property) {
      var existingFilter = _.findWhere(filters, { name: property.name });

      if (existingFilter) {
        var existingOption = _.findWhere(existingFilter.options, { value: property.value });
        if (existingOption) {
          existingOption.count += 1;
        } else {
          existingFilter.options.push({ value: property.value, count: 1 });
        }
      } else {
        var filter = {};
        filter.name = property.name;
        filter.options = [];
        filter.options.push({ value: property.value, count: 1 });
        filters.push(filter);
      }
    });
  });

  $scope.Filters = filters;

  this.toggleAll = function($event, includeAll) {
    _.each(filters, function(filterCategory) {
      _.each(filterCategory.options, function(option) {
        option.IsIncluded = includeAll;
      });
    });
  };
// }]);

app.filter('dynamicFilter', function () {
  return function (answer, filterCategories, scope) {
    var filtered = [];

    var productFilters = _.filter(filterCategories, function(fc) {
      return  _.any(fc.options, { 'IsIncluded': true });
    });

    _.each(answer, function(prod) {
      var includeProduct = true;
      _.each(productFilters, function(filter) {
        var props = _.filter(prod.properties, { 'name': filter.name });
        if (!_.any(props, function(prop) { return _.any(filter.options, { 'value': prop.value, 'IsIncluded': true }); })) {
          includeProduct = false;
        }
      });
      if (includeProduct) {
        filtered.push(prod);
      }
    });
    return filtered;
  };
});
});
