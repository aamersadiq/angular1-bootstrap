(function() {
    'use strict';

    angular
        .module('app.wines')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'wines',
                config: {
                    url: '/wines',
                    templateUrl: 'modules/wines/wines.view.html',
                    controller: 'WinesController',
                    controllerAs: 'vm',
                    title: 'Wines',
                }
            }
        ];
    }
})();
