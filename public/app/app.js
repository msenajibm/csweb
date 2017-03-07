'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngAnimate',
    'ui.router',
    'ui.select',
    'ui.bootstrap',
    'login'
])
    .config(['$urlRouterProvider', function ($urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
    }])
    .constant('isMockApi', true)
    .constant('baseUrl', 'localhost:6002');
