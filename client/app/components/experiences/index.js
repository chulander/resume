'use strict'

module.exports = angular.module('experiences', [])
	.controller('ExperiencesController', require('./experiences.controller.js'))
	.controller('ExperiencesModalController', require('./experiences.modal.controller.js'))
	.config(require('./experiences.state.js'))
