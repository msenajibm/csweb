'use strict';

angular.module('overview', ['ui.router', 'smart-table'])

    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('dashboard.overview', {
            url: '/overview',
            templateUrl: 'app/dashboard/overview/overview.html',
            controller: 'OverviewController',
            controllerAs: "OverviewController"
        })
    }])

    .controller('OverviewController', ["$scope", "$http", function ($scope, $http) {
        $scope.options = {
            cellHeight: 400,
            verticalMargin: 10
        };

    }]);