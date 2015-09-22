'use strict'

module.exports = angular.module('experience', [
	 require('./event').name])
	.controller('ExperienceCtrl', require('./experience.controller.js'))
	.config(require('./experience.state.js'))


// module.exports = angular.module('experience', [])
// 	.directive('event', require('./event/event.directive.js'))
// 	.controller('ExperienceCtrl', require('./experience.controller.js'))
// 	.config(require('./experience.state.js'))
// 	