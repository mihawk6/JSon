var myapp=angular.module("myapp",[]);
myapp.controller("myctrl",function($scope,$http){
    $http.get("http://127.0.0.1:5900/emp").success(function(response){$scope.names=response;})

})