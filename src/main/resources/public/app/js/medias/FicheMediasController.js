angular
    .module('mediasModule')
    .controller('FicheMediasController', function($scope, $routeParams, ficheMediaService) {
        console.log('test fiche medias controller');
        var id = $routeParams.ref;

        $scope.mediasModule = [];
        $scope.listeMedia = ["CD", "Livre", "DVD"];
        $scope.media = {};

        ficheMediaService.getMedia(id).then(function(data) {
            $scope.media = data;
        });

    });
