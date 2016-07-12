'use strict';

angular.module('loginModule').factory('loginService',
		function($http, $cookieStore, $rootScope) {

			var loginService = {};

			loginService.connection = function(login, pass) {

				var myUrl = 'http://localhost:8080/resource/authority';
				var token = 'Basic ' + btoa(login + ':' + pass);
				var config = {
					headers : {
						'Authorization' : token
					},
				}
				$http.get(myUrl, config).then(function(response) {

					if (response.status === 200) {
						 $rootScope.globals = {
					                connected : true,
					                login : login
					            };
						//connected = true; // variable global
						$http.defaults.headers.common['Authorization'] = token;
						// response.data => droits du gars a stocker
						$cookieStore.put('token', token);
						console.log('User Authenticated');
					} else {
						badRequest = true;
						console.log('Access Denied');
						// set un message affiché dans la vue du style mauvaise
						// identifiants
					}

					document.location.href = " #/medias";

				}, function(response) {
					$http.defaults.headers.common['Authorization'] = 'Basic ';
					console.log("Connexion Problem");
				});
			};

			loginService.deconnection = function() {
				token = '';
				$cookieStore.remove('token');
				$http.defaults.headers.common['Authorization'] = 'Basic ';
				document.location.href = " #/login";
				connected = false;
				// droit à enlever
				console.log("disconnected");
			}

			loginService.hasAuthority = function(droit) {
				// parcours la liste des droits du user connecté pour veirfier
				// si il y a le droit dedans
			}

			return loginService;
		});
