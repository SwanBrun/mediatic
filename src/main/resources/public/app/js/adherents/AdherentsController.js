angular
	.module('adherentsModule')
	.controller('AdherentsController', function($scope, $window, $http, $rootScope, adherentsService, DTOptionsBuilder) {

    $rootScope.pageActive = "adherents";
    $scope.adherents = [];

    //Nous n'utilisons pas le service, sinon le tableau ne charge pas les ajouts et modifications.
   /* adherentsService.getAdherents().then(function(param) {
        $scope.adherents = param;
    });*/
    
    var myUrl = 'http://localhost:8080/resource/adherent';
    $http.get(myUrl).then(function(response) {
        $scope.adherents = response.data;
    }, function(response) {
        console.error('Erreur de chargement des medias');
    });

    //ajoute une option de 'rowCallback'
    $scope.dtOptions = DTOptionsBuilder.newOptions().withOption('rowCallback', rowCallback);

    //permet d'acceder à la fiche de la ligne correspondante
    function rowCallback(nRow, aData, iDisplayIndex, iDisplayIndexFull) {
        // Unbind first in order to avoid any duplicate handler (see https://github.com/l-lin/angular-datatables/issues/87)
        $('td', nRow).unbind('click');
        $('td', nRow).bind('click', function() {
            $scope.$apply(function() {
                $window.location.href = '#/ficheAdherent/' + aData[0];
            });
        });
        return nRow;
    }
});
