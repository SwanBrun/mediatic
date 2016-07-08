angular
    .module('loginModule')
    .factory('loginService', function($http) {

        var connectAdmin = false;
        var connectEtudient = false;
        var loginService = {};

        loginService.adminIsConnected = function() {
            return connectAdmin;
        }
        loginService.etudientIsConnected = function() {
            return connectEtudient;
        }


        loginService.connection = function(login, pass) {
            console.log("test1");


            var myUrl = 'http://192.168.10.12:8090/resource/connexion.login';
            $http.post(myUrl, {
                login: login,
                mdp: pass
            }).then(function(response) {
                var crypt = 'Basic ' + btoa(login + ':' + pass);
                $http.defaults.headers.common['Authorization'] = crypt;
                console.log(crypt);
                if (login == "aze" && pass == "aze") {

                    connectEtudient = true;
                    connectAdmin = false;
                    console.log(connectEtudient);
                    console.log("etudiant connected");

                } else if (login == "admin" && pass == "istrateur") {

                    connectAdmin = true;
                    connectEtudient = false;
                    console.log(connectAdmin);
                    console.log("admin connected");
                } else {
                    console.log("ni admin ni etudiant logé bizarre!");
                }



                document.location.href = " #/medias";

            }, function(response) {
                console.error('Erreur de connexion', response);
                $http.defaults.headers.common['Authorization'] = 'Basic ';
                connectAdmin = false;
                connectEtudient = false;
                console.log("problème de connexion");

            });
        };

        loginService.deconnection = function() {


            $http.defaults.headers.common['Authorization'] = 'Basic ';
            document.location.href = " #/login";
            connectAdmin = false;
            connectEtudient = false;
            console.log("disconnected");
        }

        return loginService;
    });
