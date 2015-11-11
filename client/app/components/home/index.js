module.exports = angular.module('home', [])
	.controller('HomeController', require('./home.controller.js'))
	.controller('HomeInterestController', require('./home.interest.controller.js'))
	.config(require('./home.state.js'))

