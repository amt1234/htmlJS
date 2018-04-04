angularApp1.service('Dashboard', function($http) {
  return {
    dashboardService: function() {
      return $http.get("Products.json").then(function(response) {
        return response;
      });
    }
  };
});
