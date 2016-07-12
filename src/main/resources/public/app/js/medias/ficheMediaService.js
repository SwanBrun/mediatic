angular
    .module('mediasModule')
    .factory('ficheMediaService', function($http) {
        var ficheMediaService = {};

        var myUrl = 'http://localhost:8080/resource/media/';


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
