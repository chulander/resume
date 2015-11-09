'use strict'

module.exports = angular.module('projects', [])
	.controller('ProjectsController', require('./projects.controller.js'))
	.config(require('./projects.state.js'))