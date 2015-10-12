module.exports = angular.module('home', [])
	.controller('HomeController', require('./home.controller.js'))
	.config(require('./home.state.js'))

