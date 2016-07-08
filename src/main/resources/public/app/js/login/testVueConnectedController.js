angular
    .module('loginModule')
    .controller('testVueConnectedController', function($scope, $rootScope, loginService) {

        $rootScope.pageActive = "login";

        $scope.adminConnect = function() {
            return loginService.adminIsConnected();
        }

        $scope.etudientConnect = function() {
            return loginService.etudientIsConnected();
        }

        $scope.isActive = function(route) {
            return route === $scope.pageActive;
        }

    });
