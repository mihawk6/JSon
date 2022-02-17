var t = angular.module("t", ['ngRoute'])

//router config
t.config(($routeProvider)=>{
    $routeProvider
    .when("/", {
        templateUrl: './singlehome.html',
        controller: "homeCtrl"
    })
    .when("/about", {
        templateUrl: './singletestreport.html',
        controller:'aboutCtrl'
    })
    .when("/test", {
        templateUrl: './singledeploy.html',
        controller: "deployCtrl"
    })
})

//controllers
t.controller("tCtrl", ($rootScope, $http)=>{
    //retrieve JSON file
    $http.get("./name.json")
    .success(function(response){
        $rootScope.employees = response
        console.log("empJSON retrieved.")
    })
})

t.controller("homeCtrl", function($scope, $rootScope){
    $rootScope.var = "Testing and Deployment"
    $scope.message = "Ready for another TestCase!"
})
t.controller("aboutCtrl",function($scope,$rootScope, $http)
{
    $rootScope.var = "Employee Details"
    //retrieve JSON file
    $http.get("./name.json")
    .success(function(response){
        $rootScope.employees = response
        console.log("empJSON retrieved.")
    })
})
t.controller("deployCtrl", function($scope,$rootScope, $http){
    $rootScope.var = "Search Employees"
    $scope.message = "Search employees in meeting by name:"

    search_name = document.getElementById("search_name")
    search_name.addEventListener('keyup', ()=>
    { 
            document.getElementById("search_table").style.display = "table"
        
    })
})






var http=require("http")
const fs=require("fs")
const path=require("path")
const hostname="127.0.0.1";
const port=5000;
const server=http.createServer(function(reqest,response)
{
    response.writeHead(200,{"content-type":"text/html"})
    fs.readFile(path.join(__dirname,"index.html"),"utf-8",(err,data)=>
    {
        if(err) throw err;
        response.end(data);
    });
    });