angular
    .module('adherentsModule')
    .controller('FicheAdherentController', function($scope, $http, $rootScope, ficheAdherentService) {


        $rootScope.pageActive = "adherent";
        $scope.adherent = {};
        

        $scope.calculAge = function() {
            var dateNaiss = $scope.adherent.birthDate;
            if (dateNaiss !== undefined) {
                dateNaiss = dateNaiss.split("/");
                var dateNaissFormat = new Date(dateNaiss[1] + ' ' + dateNaiss[0] + ' ' + dateNaiss[2]);
                var ageDifMs = Date.now() - dateNaissFormat.getTime();
                var ageDate = new Date(ageDifMs);
                var ageFinal = Math.abs(ageDate.getUTCFullYear() - 1970);
                $scope.adherent.age = ageFinal;
            }
        }

        $scope.adherent.finCotisation = function() {
            var dateDeb = $scope.adherent.cotisation;
            if (dateDeb !== undefined) {
                dateDeb = dateDeb.split("/");
                var dateDebFormat = new Date(dateDeb[1] + ' ' + dateDeb[0] + ' ' + dateDeb[2]);
                var dateFinAbonnement = new Date(dateDebFormat.setFullYear(dateDebFormat.getFullYear() + 1));
                $scope.adherent.cotisationFin = dateFinAbonnement.toLocaleDateString();

            }
        }

        $scope.ajout = function() {
            var dateNaissance = $scope.adherent.birthDate;
            if (dateNaissance !== undefined) {
                dateNaissance = dateNaissance.split("/");
                dateNaissance = new Date(dateNaissance[1] + ' ' + dateNaissance[0] + ' ' + dateNaissance[2]);
            }
            var UrlCreation = 'http://localhost:8080/resource/adherent/';
            console.log($scope.adherent);
            $http.post(UrlCreation, $scope.adherent).then(function(response) {

                console.log("OK fiche adherant  creation!!!!!");
                console.log(response.data);

            }, function(response) {
                console.log($scope.adherent);
                console.error('Erreur de connexion lors de la création d\'un media', response);
                //$http.defaults.headers.common.authorization = 'Basic ';
            });
        }

    });
