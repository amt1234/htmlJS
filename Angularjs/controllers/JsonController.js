// routerApp1.controller('myController',function ($scope,ServiceHttp) {
//   $scope.jsonRead=function()
//   {
// $scope.promise=ServiceHttp.read();
//
//     $scope.promise
//     .then(function(response) {
//     $scope.promise=response.data.records;
//     //console.log($scope.team);
//                 //$scope.friends=ServiceHttp
//     });
//   }
// });


// app.service('JsonService', function($http) {
//   return {
//     read: function() {
//       return $http.get("NamePassword.json")
//       .then(function(response) {
//         return response;
//       });
//     }
//   };
// });
//
//
routerApp1.controller("readJsonCtrl",function($scope,JsonService)
 {
  $scope.jsonRead=function(){
    $scope.name="1234";
     $scope.json = JsonService.read();

     $scope.json
     .then(function(response) {
        $scope.json=response.data;
       });

//console.log("coming from controller", response.data.records);
 //console.log($scope.json);
  }
 });
