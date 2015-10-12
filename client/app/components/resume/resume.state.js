//var fs = require('fs');
function ResumeState($stateProvider) {
    $stateProvider
        .state('resume', {
            url: '/resume',
            views: {
                nav: {
                    template: '<navbar></navbar>'
                },
                content: {
                    templateUrl: '/app/components/resume/resume.html',
                    controller: 'ResumeController as resumeController'
                }
            }

        })
}
ResumeState.$inject = ['$stateProvider'];
module.exports = ResumeState
