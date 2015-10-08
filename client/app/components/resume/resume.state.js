//var fs = require('fs');
function resumeState($stateProvider) {
    $stateProvider
        .state('resume', {
            url: '/resume',
            views: {
                nav: {
                    template: '<navbar></navbar>'
                },
                content: {
                    templateUrl: '/app/components/resume/resume.html',
                    controller: 'ResumeCtrl as resumeCtrl'
                }
            }

        })
}
resumeState.$inject = ['$stateProvider'];
module.exports = resumeState
