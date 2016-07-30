(function () {
    'use strict';

    angular
        .module('app.wines')
        .controller('WinesController', WinesController);

    WinesController.$inject = ['$filter', 'WinesService'];

    function WinesController($filter, WinesService) {

        var vm = this;
        vm.accountDetails;
        vm.searchArg;
        vm.wines = [];
        vm.recordsLimit = 5;
        vm.searchDescription = searchDescription;

        init();

        function init() {
            getWines().then(function(){
                
            });
        }

        function getWines() {
            return WinesService.getWines()
            .then(function(data) {
                vm.wines = data? data.wines : [];
                return vm.wines;
            });
        }

        function searchDescription() {
            var data = vm.wines;
            vm.wines = $filter('filter')(data, vm.searchArg);
        }
    }

})();
