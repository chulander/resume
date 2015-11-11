function ProfileState($stateProvider) {
    $stateProvider
        .state('profile', {
            url: '/profile',
            templateUrl: '/app/components/profile/profile.html',
            controller: 'ProfileController as profileController',
            onEnter: function(navBarAnimation) {
                navBarAnimation.background = 'profile_state--background';
                if(!navBarAnimation.status) {
                    navBarAnimation.status = true
                }

                
            },
            resolve: {
                socials: function($http) {
                    return $http.get('/api/social')
                        .then(function(res) {
                            return res.data
                        });
                }
            }
        })
}
ProfileState.$inject = ['$stateProvider'];
module.exports = /*@ngInject*/ ProfileState;
