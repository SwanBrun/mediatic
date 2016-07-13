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
								 	authorities : response.data,
					                connected : true,
					                login : login
					            };
						$http.defaults.headers.common['Authorization'] = token;
						$cookieStore.put('token', token);
						document.location.href = "#medias";
					}
				}, function(response) {
					$http.defaults.headers.common['Authorization'] = 'Basic ';
					console.log("Access Denied");
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
				if($rootScoe.globals !== undefined){
					for(var i = 0; i < $rootScoe.globals.authorities.length; i++){
						if($rootScoe.globals.authorities[i].authority === droit){
							return true;
						}
					}
				}
				return false;
			}

			return loginService;
		});
