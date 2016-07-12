angular
    .module('mediasModule')
    .factory('mediasService', function($http) {

        var mediasService = {};



        var myUrl = 'http://localhost:8080/resource/media/';


        var promise = $http.get(myUrl).then(function(response) {
            //     console.log(response.data);
            //then sera une promesse dont le retour sera le resultat de ce qui est à l'intérieur
            return response.data;

        }, function(response) {
            console.error("Erreur lors du chargement de la liste des medias");
            console.error(response.status);
            return [];
        });

        mediasService.getMedias = function() {

            return promise;
        };




        return mediasService;
    });
