//var fs = require('fs');
function EducationState($stateProvider) {
    $stateProvider
        .state('education', {
            url: '/education',
            templateUrl: '/app/components/education/education.html',
            controller: 'EducationController as educationController',
            onEnter: function($stateParams, $state, navBarAnimation) {
            	navBarAnimation.background = 'education_state--background';
            	navBarAnimation.status=true;

            }
        })
}
EducationState.$inject = ['$stateProvider'];
module.exports = /*@ngInject*/ EducationState
