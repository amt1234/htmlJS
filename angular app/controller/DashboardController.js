
app.controller('dashboardController', function($scope) {

  console.log("CONTROLLER")

})
app.filter('uniqueString',function(){
  return function(items,keyword){
    var filtered = [];

    for(var i=0;i < items.length;i++){
      var item = items[i];
      var flag = false;

      if(i==0){
        filtered.push(item);
      }else{
        for(var j=0;j < filtered.length;j++){
          var filteredItem = filtered[j];

          if(item[keyword] == filteredItem[keyword]){
            flag = true;
          }
          console.log(item[keyword]);
        }

        if(!flag){
          filtered.push(item);
        }
      }

    }

    return filtered;
  };
});
