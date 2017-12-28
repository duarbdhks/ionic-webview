/*global define, console */

define(function () {
    'use strict';

    function ctrl($scope, $state, localStorageService) {

        // Called to navigate to the main app
        $scope.startApp = function() {
            localStorageService.set('isFirst', false);
            $state.go('main');
        };

        // Called each time the slide changes
        $scope.slideChanged = function(index) {
            $scope.slideIndex = index;
        };


    }

    ctrl.$inject = ['$scope', '$state', 'localStorageService'];
    return ctrl;

});