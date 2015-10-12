'use strict'

module.exports = angular.module('signup', [])
	.controller('SignUpController', require('./signup.controller.js'))
	.config(require('./signup.state.js'))