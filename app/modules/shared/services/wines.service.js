(function () {
    'use strict';

    angular
        .module('app.shared')
        .factory('WinesService', WinesService);

    WinesService.$inject = ['$http', '$q'];

    function WinesService($http, $q) {
        var service = {
            getWines: getWines,
            getAccountDetails: getAccountDetails
        };

        return service;

        function getWines() {
            return $http.get('data/customer-wines.json')
                .then(success)
                .catch(fail);
        }

        function getAccountDetails() {
            return $http.get('data/account-details.json')
                .then(success)
                .catch(fail);
        }

        function success(response) {
            return response.data;
        }

        function fail(error) {
            var msg = 'Query failed! ' + error.data.description;
            return $q.reject(msg);
        }
    }
})();
