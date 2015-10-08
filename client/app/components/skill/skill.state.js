//var fs = require('fs');
function skillState($stateProvider) {
    $stateProvider
        .state('skills', {
            url: '/skills',
            templateUrl: '/app/components/skill/skill.html',
            controller: 'SkillCtrl as skillCtrl'
        })
}
skillState.$inject = ['$stateProvider'];
module.exports = skillState
