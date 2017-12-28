/*global define*/

define(['angular'], function (angular) {
    "use strict";

    var directive = function () {

        return function(scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                if(event.which === 13) {
                    scope.$apply(function(){
                        scope.$eval(attrs.ngEnter);
                    });

                    event.preventDefault();
                }
            });
        };

    };

    directive.$inject = [];
    return directive;
});