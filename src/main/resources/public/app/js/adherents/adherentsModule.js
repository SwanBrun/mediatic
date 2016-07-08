angular.module('adherentsModule', ['ngRoute']);

angular.module('adherentsModule')
    .config(function($routeProvider) {
        $routeProvider.when('/adherents', {
            templateUrl: "html/adherents/adherents.html",
            controller: "AdherentsController"

        });
        $routeProvider.when('/ficheAdherent', {
            templateUrl: "html/adherents/ficheAdherent.html",
            controller: "FicheAdherentController"
        });
        $routeProvider.when('/ficheAdherent/:ref', {
            templateUrl: "html/adherents/ficheAdherent.html",
            controller: "FicheAdherentModController"

        });

    })
