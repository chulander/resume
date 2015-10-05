//var fs = require('fs');
function profileState($stateProvider) {
   $stateProvider
        .state('profile', {
            url: '/profile',
            controller: 'ProfileCtrl as profileCtrl',
            templateUrl: '/app/pages/profile/profile.html',
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



