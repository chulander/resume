//var fs = require('fs');
function resumeState($stateProvider) {
    $stateProvider
        .state('resume', {
            url: '/resume',
            templateUrl: '/app/pages/resume/resume.html',
            controller: 'ResumeCtrl as resumeCtrl'
        })
}
resumeState.$inject = ['$stateProvider'];
module.exports = resumeState
