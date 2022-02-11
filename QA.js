var QA = angular.module("QA", [])
QA.controller("QACtrl", ($scope, $http)=>{

    //retrieve JSON file
    $http.get("./name.json")
    .success((response)=>{
        $scope.employees = response
    })
})

//email validation filter
QA.filter("validateEmail", ()=>{
    return (input)=>{
        
        if((/^([a-z0-9_\.]+)@(([a-z0-9]+)\.)([a-z]{2,3})$/).test(input))
        {
            document.getElementById(input).style.border='2px solid black';
            return input
        }
        document.getElementById(input).style.backgroundColor = "orange"
        return input
    }
})

//phone validation filter
QA.filter("validatePhone", ()=>{
    return (input)=>{
        
        if((/^[0-9]{10}$/).test(input))
        {
            document.getElementById(input).style.border='2px solid black';
            return input
        }
        document.getElementById(input).style.backgroundColor = "orange"
        return input
    }
})