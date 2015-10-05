'use strict';

module.exports = angular.module('app.directives', [])
	.directive('event', require('./event/event.directive.js'))
	.directive('card', require('./card/card.directive.js'))