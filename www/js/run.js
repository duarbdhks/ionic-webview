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
            var BackButton = 0;
            /*
            $ionicPlatform.registerBackButtonAction(function (e) {

                function showConfirm() {
                    var confirmPopup = $ionicPopup.show({
                        title : '알림',
                        template : '프리모아를 종료하시겠습니까?',
                        buttons : [{
                            text : '취소',
                            type: 'button-cancel',
                        }, {
                            text : '확인',
                            type: 'button-confirm',
                            onTap : function() {
                                ionic.Platform.exitApp();
                            }
                        }]
                    });
                }

                if ($ionicHistory.currentStateName() == 'index' || $ionicHistory.currentStateName() == 'tab.calendar') {
                    if (BackButton == 0) {
                        BackButton++;
                        showConfirm();
                        $timeout(function() {
                            BackButton = 0;
                        }, 2500);
                    }else{
                        navigator.app.exitApp();
                    }
                }else{
                    if($ionicHistory.backView() == null){
                        $state.go('tab.calendar');
                    }else{
                        $ionicHistory.backView().go();
                    }
                }

            }, 100);
            */

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
                        .startInit("077a0282-fe45-42e0-b85c-c4cb9cf8363e")
                        .handleNotificationOpened(notificationOpenedCallback)
                        .endInit();
                }
            });
        }]);
});