'use strict'

module.exports = angular.module('education', [])
	.controller('EducationController', require('./education.controller.js'))
	.config(require('./education.state.js'))