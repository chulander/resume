function ExperiencesState($stateProvider) {
    $stateProvider
        .state('experiences', {
            url: '/experiences',
            templateUrl: '/app/components/experiences/experiences.timeline.html',
            controller: 'ExperiencesController as experiencesController',
            resolve: {
                jobs: function($http) {
                    return $http.get('/api/experiences')
                        .then(function(res) {
                            return res.data
                        })
                },
                gmap: function(uiGmapGoogleMapApi) {
                    return uiGmapGoogleMapApi.then(function(map){
                        console.log('resolving, what is map', map);
                        return map;
                    })
                }
            },
            onEnter: function(navBarAnimation) {
                navBarAnimation.background = 'experiences_state--background';
                navBarAnimation.status = true;
            }

        })
}
ExperiencesState.$inject = ['$stateProvider'];
module.exports = /*@ngInject*/ ExperiencesState;
