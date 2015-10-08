function experienceState($stateProvider) {
    $stateProvider
        .state('experience', {
            url: '/experience',
            views: {
                nav: {
                    template: '<navbar></navbar>'
                },
                content: {
                    templateUrl: '/app/components/experience/experience.html',
                    controller: 'ExperienceCtrl as experienceCtrl'
                }
            },
            resolve: {
                jobs: function($http) {
                    return $http.get('/api/experience')
                        .then(function(res) {
                            return res.data
                        });
                }

            }

        })
}
experienceState.$inject = ['$stateProvider'];

module.exports = experienceState
