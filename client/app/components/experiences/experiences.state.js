function ExperiencesState($stateProvider) {
    $stateProvider
        .state('experiences', {
            url: '/experiences',
            templateUrl: '/app/components/experiences/experiences.html',
            controller: 'ExperiencesController as experiencesController',
            resolve: {
                jobs: function($http) {
                    return $http.get('/api/experiences')
                        .then(function(res) {
                            return res.data
                        });
                }

            }

        })
}
ExperiencesState.$inject = ['$stateProvider'];
module.exports = /*@ngInject*/ ExperiencesState;
