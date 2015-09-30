'use strict';

module.exports = angular.module('app.directives', [])
	.directive('event', require('./event/event.directive.js'))
	.directive('spinner', require('./spinner/spinner.directive.js'))