angular
    .module('adherentsModule')
    .factory('ficheAdherentService', function($http) {
        var ficheAdherentService = {};

        var myUrl = 'http://localhost:8080/resource/adherent/';

        ficheAdherentService.getAdherent = function(id) {
            var promesse = $http.get(myUrl + id).then(function(response) {
                return response.data;
            }, function(cause) {
                console.log(cause.data);
            });
            return promesse;
        }
        return ficheAdherentService;
    });
