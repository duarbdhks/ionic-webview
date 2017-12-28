/*global define, console */

define(['angular'], function (angular) {
    "use strict";

    var factory = function ($q, $http, $log, dgm_conf, $location, $ionicLoading, $ionicPlatform, $ionicPopup) {

        var doCall = function (method, url, params) {

            $ionicPlatform.ready(function() {
                //인터넷 연결 요청 팝업
                if(window.Connection) {
                    if(navigator.connection.type == Connection.NONE) {

                        $ionicPopup.show({
                            title : '통신 확인',
                            template : 'Wifi 또는 셀룰러데이터가 연결되었는지<br>확인 후 업데이트를 진행해주세요.',
                            buttons : [{
                                text : '확인',
                                type: 'button-confirm',
                                onTap : function() {
                                    ionic.Platform.exitApp();
                                }
                            }]
                        });
                    }
                }
            });

            var httpOption = {
                method : method,
                url : url
            };

            if(method == 'GET')
                angular.extend(httpOption, params);
            else
                angular.extend( httpOption, {data : $.param(params) }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'} });

            return $q(function (resolve, reject) {
               $http(httpOption)
                .then(function (response) {
                    var resData = response.data;
                    if(_.isEmpty(resData)){
                        reject({
                            cd : dgm_conf.RESPONSE_CODE.SYSTEM_ERROR,
                            msg : dgm_conf.RESPONSE_CODE.SYSTEM_ERROR
                        });
                    }else if(resData.ResultCode == dgm_conf.RESPONSE_CODE.SUCCEEDED){
                        resolve(resData.Data);
                    }else {
                        reject({cd: resData.ResultCode, msg: resData.Msg, data: resData.Data});
                    }
                }, function (error) {
                    var resData = error.data;
                    if (error.status == 401) {
                        $location.url('/login');
                        $ionicLoading.hide();
                    }
                    reject({cd: resData.ResultCode, msg: resData.Msg, data: resData.Data});
                });
            });
        };

        var get = function (url, params) {
            return doCall('GET', url, {params: params});
        };

        var post = function (url, params) {
            return doCall('POST', url, params);
        };

        return {
            get : get,
            post : post
        }
    };

    factory.$inject = ['$q', '$http', '$log', 'dgm_conf', '$location', '$ionicLoading', '$ionicPlatform', '$ionicPopup'];
    return factory;
});