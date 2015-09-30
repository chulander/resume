'use strict';
function navbar() {

    var states = require('../pages');
    return {
        restrict: 'E',
        scope: {},
        templateUrl: '/app/navbar/navbar.html',
        link: function(scope) {
            //this is for the hamburger responsive icon
            scope.spans = new Array(3);

            //this list all the states;
            scope.items = states.requires
        }
    }
}


module.exports = navbar;
