/*global define */

define(function (require) {
    
    'use strict';
    
    var angular = require('angular'),
        config = require('config'),
        services = angular.module('app.services', ['app.config']);
    
    services
        .factory('remoteService', require('services/remoteService'))
        .factory('DgmService', require('services/DgmService'))

    return services;

});