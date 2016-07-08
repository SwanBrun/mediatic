angular
    .module('mediasModule')
    .factory('ficheMediaService', function($http) {
        var ficheMediaService = {};

        var myUrl = 'http://192.168.10.12:8090/resource/media.accession/?id=';


        console.log('test fiche media service');
        ficheMediaService.getMedia = function(id) {
            var promesse = $http.get(myUrl + id).then(function(response) {
                return response.data;
            }, function(cause) {
                console.log("Cause fiche media service");
                console.log(cause.data);
            });
            return promesse;
        }
        return ficheMediaService;
    });
