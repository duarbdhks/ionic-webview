/*global define */

define(['angular', 'services/services'],
    function (angular) {
        'use strict';
        
        var filters = angular.module('app.filters', ['app.services']);
        filters

        .filter('parseDate', function() {
            return function(input) {
                return new Date(input);
            };
        })

        .filter('parseMoment', function(moment){
            return function(input){
                var m = moment(input).format();
                return new Date(m);
            };
        })

        return filters;
 
    });