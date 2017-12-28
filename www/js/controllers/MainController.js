/*global define, console */

define(function () {
    'use strict';

    function ctrl($scope, $ionicPopup, $ionicPlatform, $ionicHistory, $state, $window) {

        var freemoa = window.open('http://mv2.freemoa.net/', '_self', 'EnableViewPortScale=yes,fullscreen=yes,location=no');

        freemoa.addEventListener('exit', function (event) {
            ionic.Platform.exitApp();
        });

        freemoa.addEventListener('loaderror ', function (event) {
            console.log(event,'에러났자나 시발')
            $window.location.reload(true);
        });

    }

    ctrl.$inject = ['$scope', '$ionicPopup', '$ionicPlatform', '$ionicHistory', '$state', '$window'];
    return ctrl;

});