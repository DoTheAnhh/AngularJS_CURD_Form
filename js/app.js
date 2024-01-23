var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(function($routeProvider){
    $routeProvider
        .when('/list', {
            templateUrl: "views/list.html",
            controller: ListController
        })
        .when('/add', {
            templateUrl: "views/add.html",
            controller: AddController
        })
        .when('/update/:id', {
            templateUrl: "views/update.html",
            controller: UpdateController
        })
        .otherwise({
            redirectTo: '/list'
        })
})