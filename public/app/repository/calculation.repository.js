/**
 * Created by user on 12.03.2017.
 */
'use strict';

angular.module('repositories')
    .service('CalculateRepository', ["$http", "$q", "isMockApi", "baseUrl", function ( $http, $q, isMockApi, baseUrl ) {

        var self = this;

        // public API
        self.calculate = calculate;

        // functions

        /**
         * It retrieves groups information for particular user and organization
         * @return {*}
         */
        function calculate( money, rate, months ) {
            return $http.get( baseUrl + '/calculate/annuity',{
                params: {
                    money: money,
                    rate: rate,
                    months: months
                }
            })
                .then(function(data){
                    return data.data;
                });
        }
    }]);