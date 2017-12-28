/*global define, require */

define([
        'angular',
        'uiRouter',
        'config',
        'filters/filters',
        'services/services',
        'directives/directives',
        'controllers/controllers',
        'ngCordova',
        'ionicAngular',
        'locastorage',
        'moment',
        'angularMoment',
        'angularAnimate'
    ],

    function (angular) {
        'use strict';

        var app = angular.module('app', [
            'ionic',
            'ngCordova',
            'app.controllers',
            'app.filters',
            'app.services',
            'app.directives',
            'app.config',
            'LocalStorageModule',
            'ui.router',
            'angularMoment',
            'ngAnimate'
        ]);

        return app;
    });