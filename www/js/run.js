/*global define, require */

define(['app'], function (app) {
    'use strict';

    app.run(['$ionicPlatform',
        '$rootScope',
        '$ionicHistory',
        '$ionicPopup',
        '$timeout',
        '$state',
        'localStorageService',
        function ($ionicPlatform,
                  $rootScope,
                  $ionicHistory,
                  $ionicPopup,
                  $timeout,
                  $state,
                  localStorageService) {

            $rootScope.isAndroid = ionic.Platform.isAndroid();
            $rootScope.isIOS = ionic.Platform.isIOS();

            $timeout(function () {
                if(localStorageService.get('isFirst') === null){
                    $state.go('intro');
                }else{
                    $state.go('main');
                }
            }, 0);

            //종료 팝업
            $ionicPlatform.registerBackButtonAction(function (e) {
                if($ionicHistory.backView() == null || $ionicHistory.currentStateName() == 'main') {
                    navigator.app.exitApp();
                }
            }, 100);

            $ionicPlatform.ready(function() {
                if(window.cordova && window.cordova.plugins.Keyboard) {
                    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
                    // for form inputs)

                    cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                    // Don't remove this line unless you know what you are doing. It stops the viewport
                    // from snapping when text inputs are focused. Ionic handles this internally for
                    // a much nicer keyboard experience.
                    cordova.plugins.Keyboard.disableScroll(true);
                }
                if(window.StatusBar) {
                    StatusBar.styleDefault();
                }


                document.addEventListener("deviceready", onDeviceReady, false);

                function onDeviceReady() {

                    var notificationOpenedCallback = function(jsonData) {
                        var data = jsonData.notification.payload.additionalData;
                        console.log(data)
                    };

                /*window.plugins.OneSignal.getPermissionSubscriptionState(function (status) {
                        console.log(status.subscriptionStatus.userId);
                        console.log(window.device.uuid)
                    });*/

                    window.plugins.OneSignal
                        .startInit("a57ee400-064a-49b4-af47-6a1d5545ff39")
                        .handleNotificationOpened(notificationOpenedCallback)
                        .endInit();
                }
            });
        }]);
});