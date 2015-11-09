'use strict'

module.exports = angular.module('contact', [])
	.controller('ContactController', require('./contact.controller.js'))
	.config(require('./contact.state.js'))