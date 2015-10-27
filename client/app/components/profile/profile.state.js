//var fs = require('fs');
function ProfileState($stateProvider) {
    $stateProvider
        .state('profile', {
            url: '/profile',
            views: {
                nav: {
                    template: '<navbar class="chu-nav"></navbar>'
                },
                content: {
                    templateUrl: '/app/components/profile/profile.html',
                    controller: 'ProfileController as profileController'
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
module.exports = ProfileState
