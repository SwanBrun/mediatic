angular.module('mediatic', ['ngRoute', 'datatables', 'adherentsModule', 'mediasModule', 'loginModule', '720kb.datepicker']);

angular.module('mediatic')
    .config(function($routeProvider, $httpProvider) {

        $routeProvider.otherwise('/');

        $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


    });

angular.module('mediatic').run(function(DTDefaultOptions, DTOptionsBuilder) {
    DTDefaultOptions.setLanguageSource('../config/French.json');
});
