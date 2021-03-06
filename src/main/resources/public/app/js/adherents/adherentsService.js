angular
    .module('adherentsModule')
    .factory('adherentsService', function($http) {
        adherentsService = {};

        var myUrl = 'http://localhost:8080/resource/adherent';
        var promise = $http.get(myUrl).then(function(response) {
            console.log(response.data);
            //then sera une promesse dont le retour sera le resultat de ce qui est à l'intérieur
            return response.data;
        }, function(response) {
            console.error("Erreur lors du chargement de la liste");
            console.error(response.status);
            return [];
        });
        adherentsService.getAdherents = function() {
            return promise;
        };

        return adherentsService;


    });
