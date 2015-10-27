'use strict';
function navbar(navBarAnimation) {
    return {
        restrict: 'E',
        templateUrl: '/app/shared/directives/navbar/navbar.html',
        link: function(scope, element, attrs) {
            //this is for the hamburger responsive icon
            //scope.navBarAnimation = navBarAnimation;
            scope.spans = new Array(3);
            console.log('what is navBarAnimation', navBarAnimation.status);
            scope.navBarAnimation = navBarAnimation.status;
            //this list all the states;
            scope.items = angular.module('app.pages').requires
        }
    }
}

module.$inject = ['navBarAnimation'];
module.exports = navbar;
