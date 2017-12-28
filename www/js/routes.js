/*global define, require */

define(['app'], function (app) {
    'use strict';

    app.config(['$stateProvider', '$urlRouterProvider',
            function ($stateProvider, $urlRouterProvider) {

                $stateProvider
                .state('intro', {
                    url: "/slides",
                    templateUrl: "templates/slides.html",
                    controller: 'SlidesController'
                })
                .state('main', {
                    url: "/main",
                    templateUrl: "templates/main.html",
                    controller: 'MainController'
                });

            $urlRouterProvider.otherwise("/intro");
        }]);


});