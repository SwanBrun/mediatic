angular
    .module('adherentsModule')
    .controller('FicheAdherentController', function($scope, $http, $rootScope, ficheAdherentService) {


        $rootScope.pageActive = "adherent";
        $scope.adherent = [];
        $scope.adherent.cotisation = [];

        $scope.calculAge = function() {
            var dateNaiss = $scope.adherent.date_naissance;
            if (dateNaiss !== undefined) {
                dateNaiss = dateNaiss.split("/");
                var dateNaissFormat = new Date(dateNaiss[1] + ' ' + dateNaiss[0] + ' ' + dateNaiss[2]);
                var ageDifMs = Date.now() - dateNaissFormat.getTime();
                var ageDate = new Date(ageDifMs);
                var ageFinal = Math.abs(ageDate.getUTCFullYear() - 1970);
                $scope.adherent.age = ageFinal;
            }
        }

        $scope.finCotisation = function() {
            var dateDeb = $scope.adherent.cotisation.debut;
            if (dateDeb !== undefined) {
                dateDeb = dateDeb.split("/");
                var dateDebFormat = new Date(dateDeb[1] + ' ' + dateDeb[0] + ' ' + dateDeb[2]);
                var dateFinAbonnement = new Date(dateDebFormat.setFullYear(dateDebFormat.getFullYear() + 1));
                $scope.adherent.cotisation.fin = dateFinAbonnement.toLocaleDateString();

            }
        }

        $scope.ajout = function() {
            var dateNaissance = $scope.adherent.date_naissance;
            if (dateNaissance !== undefined) {
                dateNaissance = dateNaissance.split("/");
                dateNaissance = new Date(dateNaissance[1] + ' ' + dateNaissance[0] + ' ' + dateNaissance[2]);
            }
            var UrlCreation = 'http://192.168.10.12:8090/resource/adherent.creation';
            console.log($scope.adherent);
            $http.post(UrlCreation, {
                nom: $scope.adherent.nom,
                prenom: $scope.adherent.prenom,
                date_naissance: dateNaissance,
                email: $scope.adherent.email,
                adresse: {
                    ligne1: $scope.adherent.adresse.ligne1,
                    ligne2: '',
                    codepostal: $scope.adherent.adresse.codepostal,
                    ville: $scope.adherent.adresse.ville
                },
                cotisation: {
                    debut: $scope.adherent.cotisation.debut,
                    fin: $scope.adherent.cotisation.fin,
                    montant: $scope.adherent.cotisation.montant
                },
            }).then(function(response) {

                console.log("OK fiche adherant  creation!!!!!");
                console.log(response.data);

            }, function(response) {
                console.log($scope.adherent);
                console.error('Erreur de connexion lors de la création d\'un media', response);
                //$http.defaults.headers.common.authorization = 'Basic ';
            });
        }

    });
