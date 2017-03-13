'use strict';

angular.module('dashboard', ['ui.router', 'ui.bootstrap'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.
        state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: "DashboardController"
        })
    }])

    .controller('DashboardController', ["$scope", '$state', "UsersRepository", function($scope, $state, UsersRepository) {
        $scope.user = "msenaj";
        $scope.selectedUser;    //? change to user management page

        UsersRepository.getAll()
            .then(function(users){
                $scope.users = users;
            })
    }]);