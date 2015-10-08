'use strict';
function navbar() {
    return {
        restrict: 'E',
        scope: {},
        templateUrl: '/app/shared/directives/navbar/navbar.html',
        link: function(scope) {
            //this is for the hamburger responsive icon
            scope.spans = new Array(3);

            //this list all the states;
            scope.items = angular.module('app.pages').requires
        }
    }
}

module.exports = navbar;
