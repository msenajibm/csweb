/**
 * Created by user on 12.03.2017.
 */
'use strict';

angular.module('repositories')
    .service('UsersRepository', ["$http", "$q", "isMockApi", "baseUrl", function ( $http, $q, isMockApi, baseUrl ) {

        var self = this;

        // public API
        self.getAll = getAll;
        self.create = create;
        self.remove = remove;
        self.get = get;
        self.update = update;

        self.getPicture = getPicture;
        self.setPicture = setPicture;
        self.deletePicture = deletePicture;

        // functions

        /**
         * It retrieves groups information for particular user and organization
         * @return {*}
         */
        function getAll() {
            if( isMockApi ){
                return $http.get('mocks/groups.json')
                    .then(function(data){
                        return data.data;
                    });
            } else {
                return $http.get( baseUrl + '/users')
                    .then(function(data){
                        return data.data;
                    });
            }
        }

        /**
         * It creates group
         * @param {object} groupDetails in JSON format { "groupname":"xyz"}
         * @return {*}
         */
        function create( groupDetails ){
            if( isMockApi ){
                return $q.resolve({
                    "ok": true,
                    "id": "GRP-ff00fc78-18aa-4540-bc89-72e40cb13a6c",
                    "rev": "2-995ba96f1bba7175c5bf7d9aa07bc595"
                });
            } else {
                return $http.post( baseUrl + '/groups', groupDetails, {
                    params: {
                        OrgID: UserService.organizationId,
                        UserID: UserService.userId
                    }})
                    .then(function(data){
                        return data.data;
                    });
            }
        }

        /**
         * It delete group base on group ID.
         * @param groupId
         * @return {*}
         */
        function remove( groupId ){
            if( isMockApi ){
                return $q.resolve({
                    "ok": true,
                    "id": "GRP-ff00fc78-18aa-4540-bc89-72e40cb13a6c",
                    "rev": "6-31a4506ed65488a9efb35ab58ca16a0d"
                });
            } else {
                return $http.delete( baseUrl + '/groups/' + groupId, {
                    params: {
                        OrgID: UserService.organizationId,
                        UserID: UserService.userId
                    }})
                    .then(function(data){
                        return data.data;
                    });
            }
        }

        /**
         * It gets single group details.
         * @param groupId
         * @return {*}
         */
        function get( groupId ){
            if( isMockApi ){
                return $http.get('mocks/groups.json')
                    .then(function(data){
                        for( var i = 0; i < data.data.length; i++ ){
                            var group = data.data[i];
                            if( Object.keys(group)[0] === groupId){
                                return group[Object.keys(group)[0]];
                            }
                        }
                        return {};
                    });
            } else {
                return $http.get( baseUrl + '/groups/' + groupId, {
                    params: {
                        OrgID: UserService.organizationId,
                        UserID: UserService.userId
                    }})
                    .then(function(data){
                        return data.data;
                    });
            }
        }

        /**
         * It updates single group details
         * @param groupId
         * @param {object} groupDetails in JSON format { "groupname":"xyz"}
         * @return {*}
         */
        function update( groupId, groupDetails ){
            if( isMockApi ){
                return $q.resolve({
                    "ok": true,
                    "id": "GRP-ff00fc78-18aa-4540-bc89-72e40cb13a6c",
                    "rev": "2-995ba96f1bba7175c5bf7d9aa07bc595"
                });
            } else {
                return $http.post( baseUrl + '/groups/' + groupId, groupDetails,{
                    params: {
                        OrgID: UserService.organizationId,
                        UserID: UserService.userId
                    }})
                    .then(function(data){
                        return data.data;
                    });
            }
        }

        /**
         * It retrieves picture for particular group
         * @param groupId
         * @return {*}
         */
        function getPicture( groupId ){
            if( isMockApi ){
                return $http.get('mocks/picture.jpg.txt')
                    .then(function(data){
                        return data.data;
                    });
            } else {
                return $http.get( baseUrl + '/groups/' + groupId + '/picture', {
                    params: {
                        OrgID: UserService.organizationId,
                        UserID: UserService.userId
                    }})
                    .then(function(data){
                        return data.data;
                    });
            }
        }

        /**
         * It sets picture for particular group
         * @param groupId
         * @param file blob
         * @return {*}
         */
        function setPicture( groupId, file ){
            if( isMockApi ){
                return $q.resolve({
                    "ok": true,
                    "id": "GRP-ff00fc78-18aa-4540-bc89-72e40cb13a6c",
                    "rev": "4-020f103bb4f500d0ae54c8a0656548d4"
                });
            } else {
                var fd = new FormData();

                fd.append('picture', file);

                return $http.post( baseUrl + '/groups/' + groupId + '/picture', fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined},
                    params: {
                        OrgID: UserService.organizationId,
                        UserID: UserService.userId
                    }})
                    .then(function(data){
                        return data.data;
                    });
            }
        }

        /**
         * It deletes picture for particular group
         * @param groupId
         * @return {*}
         */
        function deletePicture( groupId ){
            if( isMockApi ){
                return $q.resolve({
                    "ok": true,
                    "id": "GRP-ff00fc78-18aa-4540-bc89-72e40cb13a6c",
                    "rev": "5-bdda35129573402b4190ba5cb3e913da"
                });
            } else {
                return $http.delete( baseUrl + '/groups/' + groupId + '/picture', {
                    params: {
                        OrgID: UserService.organizationId,
                        UserID: UserService.userId
                    }})
                    .then(function(data){
                        return data.data;
                    });
            }
        }
    }]);