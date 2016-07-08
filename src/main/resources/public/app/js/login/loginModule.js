angular.module('loginModule', ['ngRoute']);

angular.module('loginModule').config(function($routeProvider) {

    $routeProvider.when('/', {
        controller: 'LoginController',
        templateUrl: 'html/login/login.html'
    });



});
