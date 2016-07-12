angular.module('loginModule', ['ngRoute']);

angular.module('loginModule').config(function($routeProvider) {

    $routeProvider.when('/', {
    	//TODO : test à remettre quand ok
        controller: 'AdherentsController',//LoginController
        templateUrl: 'html/adherents/adherents.html'// 'html/login/login.html'
    });



});
