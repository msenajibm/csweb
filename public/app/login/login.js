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
                    $state.go('dashboard.overview');
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

            if ($scope.UserCreds.UserName === "msenaj") {
                return $q.resolve({data:{}});
            } else {
                return $q.reject({data:{}});
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