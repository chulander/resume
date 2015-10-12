'use strict'

module.exports = angular.module('login', [])
	.controller('LoginController', require('./login.controller.js'))
	.config(require('./login.state.js'))