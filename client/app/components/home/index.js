module.exports = angular.module('home', [])
	.controller('HomeCtrl', require('./home.controller.js'))
	.config(require('./home.state.js'))

