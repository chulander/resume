'use strict';

module.exports = angular.module('app.sharedData', [])
	.factory('navBarAnimation', require('./navbar.animation.js'))
	.factory('backendData', require('./backend.data.js'))