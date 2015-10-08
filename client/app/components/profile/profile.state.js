//var fs = require('fs');
function profileState($stateProvider) {
   $stateProvider
        .state('profile', {
            url: '/profile',
            views: {
                nav: {
                    template: '<navbar></navbar>'
                },
                content: {
                    templateUrl: '/app/components/profile/profile.html',
                    controller: 'ProfileCtrl as profileCtrl'
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
profileState.$inject = ['$stateProvider'];
module.exports = profileState



