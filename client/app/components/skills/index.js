'use strict'

module.exports = angular.module('skills', [])
	.controller('SkillsController', require('./skills.controller.js'))
	.config(require('./skills.state.js'))