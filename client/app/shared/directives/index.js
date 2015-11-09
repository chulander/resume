'use strict';

module.exports = angular.module('app.directives', [])
	.directive('card', require('./card/card.directive.js'))
	.directive('keypress', require('./keyboard/keypress.directive.js'))
	.directive('navbar', require('./navbar/navbar.directive.js'))
	.directive('myModal', require('./modal/modal.js'))
	// .directive('arrowDown', require('./arrow/arrow.down.directive.js'))