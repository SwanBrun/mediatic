angular
    .module('mediasModule')
    .controller('FicheMediasController', function($scope, $routeParams, ficheMediaService) {
        console.log('test fiche medias controller');
        var id = $routeParams.ref;

        $scope.mediasModule = [];
        $scope.listeMedia = ["CD", "Livre", "DVD"];

        ficheMediaService.getMedia(id).then(function(param) {
            $scope.auteur = param.auteur;
            $scope.titre = param.titre;
            $scope.type = param.type;
        });

    });
