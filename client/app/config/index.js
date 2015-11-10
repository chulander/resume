'use strict';

module.exports = angular.module('app.config', [])
	.factory('Authentication', require('./authentication'))
	.config(require('./routes'))