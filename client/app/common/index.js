module.exports = angular.module('app.filters', [])
	.filter('filterTimeStampToDate', require('./filter.js'));