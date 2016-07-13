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
					//TODO : if utile ou pas?
					if (response.status === 200) {
						 $rootScope.globals = {
					                isConnected : true,
					                login : login,
					                
					            };
						$http.defaults.headers.common['Authorization'] = token;
						console.log(response.data);
						// response.data => droits du gars a stocker
						$cookieStore.put('token', token);
						console.log('User Authenticated');
						document.location.href = " #/medias";
					}

				}, function(response) {
					$http.defaults.headers.common['Authorization'] = 'Basic ';
					$rootScope.globals = {
			                isConnected : false
					}
					console.log('Access Denied');
				});
			};

			loginService.deconnection = function() {
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
