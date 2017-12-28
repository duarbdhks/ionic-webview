/*global define, console */

define(function () {
    'use strict';

    function ctrl($scope, $state, localStorageService, $ionicHistory) {

        // Called to navigate to the main app
        $scope.startApp = function() {
            localStorageService.set('isFirst', false);
            $state.go('main');
            $ionicHistory.nextViewOptions({
                disableBack: true
            });
        };

        // Called each time the slide changes
        $scope.slideChanged = function(index) {
            $scope.slideIndex = index;
        };


    }

    ctrl.$inject = ['$scope', '$state', 'localStorageService', '$ionicHistory'];
    return ctrl;

});