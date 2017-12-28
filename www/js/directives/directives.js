/*global define */

define(function (require) {

    'use strict';

    var angular = require('angular'),
        services = require('services/services'),
        directives = angular.module('app.directives', ['ionic']);
    
    directives
        .directive('appVersion', require('directives/VersionDirective'))
        .directive('ngEnter', require('directives/ngEnter'))

    return directives;
});