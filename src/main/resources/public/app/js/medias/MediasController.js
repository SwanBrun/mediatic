angular
    .module('mediasModule')
    .controller('MediasController', function($scope, $http, $rootScope, $window, mediasService, DTOptionsBuilder) {

        $rootScope.pageActive = "medias";
        $scope.list = [];

        $scope.listeMedia = ["CD", "Livre", "DVD"];

        var myUrl = 'http://192.168.10.12:8090/resource/media.recherche';
        $http.get(myUrl).then(function(response) {
            $scope.list = response.data;
        }, function(response) {
            console.error('Erreur de chargement des medias');
        });


        //On obtient les medias via l'url
        mediasService.getMedias().then(function(param) {
            $scope.list = param;
        });

        //ajoute une option 'rowCallback'
        $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('rowCallback', rowCallback);

        //permet d'acceder à la fiche de la ligne correspondante
        function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
            // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
            $('td', nRow).unbind('click');
            $('td', nRow).bind('click', function() {
                $scope.$apply(function() {
                    console.log("Redirection");
                    console.log(aData);
                    $window.location.href = '#/ficheMedias/' + aData[0];
                });
            });
            return nRow;
        }


        $scope.mediasModule = [];
        $scope.listeMedia = ["CD", "Livre", "DVD"];

        $scope.ajout = function() {

            console.log("test fiche medias", $scope.type);

            var UrlCreation = 'http://192.168.10.12:8090/resource/media.creation';
            $http.post(UrlCreation, {
                titre: $scope.titre,
                type: $scope.type,
                auteur: $scope.auteur
            }).then(function(response) {

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
