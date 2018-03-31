 routerApp1.service('Calculator',function ($http) {
   this.square = function () {

//console.console.log(a);

          $http.get("CustomerJson.json").then(function (response) {
           $scope.welcome=response.data.records;
         });
};
 });
 // routerApp1.service('Calculator',function ($http) {
 //
 //  console.log("a")
 //  this.square = function (a) {
 // }
 // });
