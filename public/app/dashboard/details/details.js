'use strict';

angular.module('details', ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.
        state('dashboard.details', {
            url: '/details/{id}',
            params: {
                id: { value: null, squash: true }
            },
            templateUrl: 'app/dashboard/details/details.html',
            controller: 'DetailsController',
            controllerAs: "DetailsController"
        })
    }])

    .controller('DetailsController', ["$scope","$interval", "$stateParams", function($scope, $interval, $stateParams ) {

    }]);