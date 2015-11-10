'use strict';
function navbar(navBarAnimation) {
    return {
        restrict: 'E',
        templateUrl: '/app/shared/directives/navbar/navbar.html',
        // controller: function ($scope) {
            
        //     // console.log('what is navbar', navBarAnimation);
        // },
        link: function(scope, element) {
            //this is for the hamburger responsive icon
            //scope.navBarAnimation = navBarAnimation;
            scope.spans = new Array(3);
            scope.navBarAnimation = navBarAnimation;
            scope.items = angular.module('app.pages').requires;
            
            // console.log('what is navBarAnimation', navBarAnimation.status);
            // scope.navBarAnimation = navBarAnimation.status;
            // console.log('current state', $stateProvider);
            //this list all the states;
            // scope.items = angular.module('app.pages').requires
        }
    }
}

navbar.$inject = ['navBarAnimation'];
module.exports = navbar;
