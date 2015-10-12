'use strict'

module.exports = angular.module('resume', [])
	.controller('ResumeController', require('./resume.controller.js'))
	.config(require('./resume.state.js'))