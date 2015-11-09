//var fs = require('fs');
function ResumeState($stateProvider) {
    $stateProvider
        .state('resume', {
            url: '/resume',
            templateUrl: '/app/components/resume/resume.html',
            controller: 'ResumeController as resumeController'
        })
}
ResumeState.$inject = ['$stateProvider'];
module.exports = ResumeState
