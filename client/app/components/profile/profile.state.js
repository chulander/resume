function ProfileState($stateProvider) {
    $stateProvider
        .state('profile', {
            url: '/profile',
            templateUrl: '/app/components/profile/profile.html',
            controller: 'ProfileController as profileController',
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
