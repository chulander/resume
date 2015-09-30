'use strict'

module.exports = angular.module('resume', [])
	.controller('ResumeCtrl', require('./resume.controller.js'))
	.config(require('./resume.state.js'))