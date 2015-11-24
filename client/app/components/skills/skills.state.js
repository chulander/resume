//var fs = require('fs');
function skillsState($stateProvider) {
    $stateProvider
        .state('skills', {
            url: '/skills',
            templateUrl: '/app/components/skills/skills.html',
            controller: 'SkillsController as skillsController',
            onEnter: function(navBarAnimation) {
                navBarAnimation.background = 'skills_state--background';
           }
        })
}
skillsState.$inject = ['$stateProvider'];
module.exports = /*@ngInject*/ skillsState
