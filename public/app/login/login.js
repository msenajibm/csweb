'use strict';

angular.module('login', ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/login/login.html',
                controller: 'LoginController',
                controllerAs: "LoginController"
            })
            .state('logout', {
                url: '/logout',
                template: '',
                controller: 'LogoutController'
            })
    }])

    .controller('LoginController', ["$scope", "$state", "$http", "$q", "isMockApi", 'baseUrl', function($scope, $state, $http, $q, isMockApi, baseUrl) {
        $scope.onFormSubmit = function () {
            logIn()
                .then(function(){
                    toastr.success("Hello ", "Login successful");
                    $state.go('welcome');
                })
                .catch(function(err){
                    toastr.error(err.data, "Authentication failed");
                });
        };

        /**
         * Temporarly mockable login function
         * @return {HttpPromise}
         */
        function logIn(){
            if( !isMockApi ){
                return $http.post( baseUrl + '/login',
                    $scope.UserCreds,
                    {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        // withCredentials: true,
                        transformRequest: function(obj) {
                            var str = [];
                            for(var p in obj)
                                str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
                            return str.join("&");
                        }
                    }
                )
            } else {
                return $q.reject({data:{}});
                // return $q.resolve({data:{}});
            }
        }

        angular.element(document).ready(function () {
            // $('#myCarousel').carousel({interval:5000});
        	var currentSlide = Math.floor((Math.random() * $('.item').length));
        	$('#myCarousel').carousel(currentSlide);
        	$('#myCarousel').carousel({
        		interval:false
        	});

        });
    }])
    .controller("LogoutController",["$location", "$http", "baseUrl", "isMockApi", function($location, $http, baseUrl, isMockApi){
    }]);