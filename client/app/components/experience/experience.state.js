function ExperienceState($stateProvider) {
    $stateProvider
        .state('experience', {
            url: '/experience',
            views: {
                nav: {
                    template: '<navbar></navbar>'
                },
                content: {
                    templateUrl: '/app/components/experience/experience.html',
                    controller: 'ExperienceController as experienceController'
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
ExperienceState.$inject = ['$stateProvider'];

module.exports = ExperienceState
