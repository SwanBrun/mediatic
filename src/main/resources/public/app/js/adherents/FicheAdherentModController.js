angular
    .module('adherentsModule')
    .controller(
        'FicheAdherentModController',
        function($scope, $routeParams, $http, $rootScope, ficheAdherentService) {
            $rootScope.pageActive = "adherent";
            $scope.adherent = {};
            $scope.adherent.cotisation = [];

            var id = $routeParams.ref;

            //récuperation de l'adherant via son id
            ficheAdherentService.getAdherent(id).then(function(param) {
                $scope.adherent = param;
//                $scope.adherent.birthDate = afficheDate($scope.adherent.birthDate);
//                $scope.adherent.cotisation = afficheDate($scope.adherent.cotisation);
//                $scope.adherent.cotisationFin = afficheDate($scope.adherent.cotisationFin);
            });

            //restructuration des dates pour le datepicker (2016-06-22T00:00:00.000Z -> 2016/06/22)
            function afficheDate(date) {
                if (date !== undefined) {
                    date = date.split("T");
                    date = date[0];
                    date = date.split("-");
                    return (date[2] + "/" + date[1] + "/" + date[0])
                }
            }

            //opération de calcul d'age de l'adherant
            $scope.calculAge = function() {
                var dateNaiss = $scope.adherent.birthDate;
                if (dateNaiss !== undefined) {
                    dateNaiss = dateNaiss.split("/");
                    var dateNaissFormat = new Date(dateNaiss[1] + ' ' +
                        dateNaiss[0] + ' ' + dateNaiss[2]);
                    var ageDifMs = Date.now() -
                        dateNaissFormat.getTime();
                    var ageDate = new Date(ageDifMs);
                    var ageFinal = Math
                        .abs(ageDate.getUTCFullYear() - 1970);
                    $scope.adherent.age = ageFinal;
                }
            }

            //opération de calcul de la date de fin de cotisation
            $scope.adherent.finCotisation = function() {
                var dateDeb = $scope.adherent.cotisation;
                if (dateDeb !== undefined) {
                    dateDeb = dateDeb.split("/");
                    var dateDebFormat = new Date(dateDeb[1] + ' ' +
                        dateDeb[0] + ' ' + dateDeb[2]);
                    var dateFinAbonnement = new Date(
                        dateDebFormat.setFullYear(dateDebFormat
                            .getFullYear() + 1));
                    $scope.adherent.cotisation.cotisationFin = dateFinAbonnement
                        .toLocaleDateString();

                }
            }

            $scope.ajout = function() {
                var dateNaissance = $scope.adherent.birthDate;
                if (dateNaissance !== undefined) {
                    dateNaissance = dateNaissance.split("/");
                    dateNaissance = new Date(dateNaissance[1] + ' ' +
                        dateNaissance[0] + ' ' + dateNaissance[2]);
                }
                var UrlCreation = 'http://localhost:8080/resource/adherent/' + $scope.adherent.id;
                console.log($scope.adherent);
                $http.put(UrlCreation, $scope.adherent).then(function(response) {

                            console.log("OK fiche adherant  modificationS!!!!!");
                            console.log(response.data);

                        },
                        function(response) {
                            console.log($scope.adherent);
                            console.error(
                                'Erreur de connexion lors de la création d\'un media',
                                response);
                            // $http.defaults.headers.common.authorization
                            $http.defaults.headers.common.authorization = 'Basic ';
                        });
            }

        });
