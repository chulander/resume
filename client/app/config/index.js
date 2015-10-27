'use strict';

module.exports = angular.module('app.config', [
	require('../shared/data').name])
	.factory('Authentication', require('./authentication'))
	.config(require('./routes'))