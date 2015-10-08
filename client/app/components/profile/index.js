'use strict'

module.exports = angular.module('profile', [])
	.controller('ProfileCtrl', require('./profile.controller.js'))
	.config(require('./profile.state.js'))