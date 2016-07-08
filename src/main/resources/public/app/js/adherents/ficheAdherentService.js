angular
    .module('adherentsModule')
    .factory('ficheAdherentService', function($http) {
        var ficheAdherentService = {};

        var myUrl = 'http://192.168.10.12:8090/resource/adherent.accession/?id=';

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
