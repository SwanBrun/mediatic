angular
    .module('loginModule')
    .controller('LoginController', function($scope, $http, $window, loginService) {

    	console.log('entree');
    	
        $scope.connection = function() {
            loginService.connection($scope.login, $scope.pass)
        };

        $scope.deconnection = function() {
            loginService.deconnection();
			        }
		});
