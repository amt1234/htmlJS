app.service('jsonService', function($http) {
  return {
    dashboardService: function() {
      return $http.get("Products.json").then(function(response) {
        return response;
      });
    }
  };
});
