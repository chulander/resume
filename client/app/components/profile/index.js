'use strict'

module.exports = angular.module('profile', [])
	.controller('ProfileController', require('./profile.controller.js'))
	.config(require('./profile.state.js'))