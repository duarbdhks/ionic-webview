/*global define*/

define(['angular'], function (angular) {
    "use strict";

    var directive = function ($cordovaAppVersion, DgmService) {
        return function (scope, elm, attrs) {

            var device = ionic.Platform.device();

            ionic.Platform.ready(function() {
                if(device.available) {

                    $cordovaAppVersion.getVersionNumber()
                        .then(function (res) {
                            elm.text(res);
                        }, function (error) {
                            elm.text('버전 오류');
                        });

                    /*DgmService.getAppVersion()
                        .then(function (res) {
                            console.log(res)
                            elm.text(VERSION);
                        }, function (error) {
                            console.log(error)
                        });*/
                }
            });
        };
    };

    directive.$inject = ['$cordovaAppVersion', 'DgmService'];
    return directive;
});