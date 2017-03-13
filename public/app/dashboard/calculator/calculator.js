/**
 * Created by user on 12.03.2017.
 */
angular.module('dashboard')
    .config(['$stateProvider', function ($stateProvider) {
        $stateProvider.state('dashboard.calculator', {
            url: '/calculator',
            templateUrl: 'app/dashboard/calculator/calculator.html',
            controller: 'CalculatorController',
            controllerAs: "CalculatorController",
            // params: {
            //     'users': {value: null, squash: true}
            // },
            // resolve: {
            //     users: ["UsersRepository",'$stateParams', function(UsersRepository, $stateParams){
            //         if( !$stateParams.users ) {
            //             return UsersRepository.getAll()
            //                 .then(function (users) {
            //                     return users;
            //                 });
            //         }
            //     }]
            // }
        })
    }])

    .controller('CalculatorController', ["$scope", '$state', "CalculateRepository", function ($scope, $state, CalculateRepository) {

        $scope.calculation = {};

        $scope.calculate = function(){
            if ($scope.calculation.amount && $scope.calculation.rate && $scope.calculation.months) {
                CalculateRepository.calculate($scope.calculation.amount, $scope.calculation.rate, $scope.calculation.months)
                    .then(function(data){
                        $scope.calculationResult = data;
                    })
            }
        }

    }]);