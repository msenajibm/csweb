'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngAnimate',
    'ui.router',
    'ui.select',
    'ui.bootstrap',
    'mgcrea.ngStrap',
    'gridstack-angular',
    'login',
    'dashboard',
    'details',
    'overview',
    'repositories'
])
    .config(['$urlRouterProvider', function ($urlRouterProvider) {

        $urlRouterProvider.otherwise('/login');
    }])
    .constant('isMockApi', false)
    .constant('baseUrl', 'http://localhost:3000');
