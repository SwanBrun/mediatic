angular
    .module('mediasModule')
    .controller('FicheMediasController', function($scope, $routeParams, ficheMediaService, $http) {
        console.log('test fiche medias controller');
        var id = $routeParams.ref;

        $scope.mediasModule = [];
        $scope.listeMedia = ["CD", "Livre", "DVD"];
        $scope.media = {};
        

        ficheMediaService.getMedia(id).then(function(data) {
            $scope.media = data;
        });
        
        
        $scope.ajout = function() {

            console.log("test fiche medias", $scope.type);

            var UrlCreation = 'http://localhost:8080/resource/media/' + $scope.media.id;
            $http.put(UrlCreation, $scope.media).then(function(response) {

                console.log("OK fiche media creation!!!!!");
            }, function(response) {
                //						console.log($scope.type);
                //						console.log($scope.auteur);
                //						console.log($scope.titre);
                console.error('Erreur de connexion lors de la création d\'un media', response);
                $http.defaults.headers.common.authorization = 'Basic ';
            });
        }
        
        
        

    });
