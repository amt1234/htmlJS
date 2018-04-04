  routerApp1.service('Calculator',function ($http) {
    return{
   square : function () {
      return     $http.get("CustomerJson.json").then(function (response) {
        //   $scope.welcome=response.data.records;
        return response;
         });
       }
 };
});
//  // routerApp1.service('Calculator',function ($http) {
//  //
//  //  console.log("a")
//  //  this.square = function (a) {
//  // }
//  // });
// routerApp1.service('ServiceHttp',function($scope,$http){
// return{
//   read : function() {
// return  $http.get("CustomerJson.json").then(function (response) {
//   //  $scope.friends=response.data;
//   return response;
//   });
//
//    // this.getPlayers=function(){
//    //   return friends.promise();
//
//    }
//  };
// });

 // routerApp1.service('JsonService', function($http) {
 //     return {
 //    read: function() {
 //      return $http.get("CustomerJson.json")
 //      .then(function(response) {
 //        return response;
 //      });
 //    }
 //   };
 //  });
