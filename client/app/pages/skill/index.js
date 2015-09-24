'use strict'

module.exports = angular.module('skills', [])
	.controller('SkillCtrl', require('./skill.controller.js'))
	.config(require('./skill.state.js'))