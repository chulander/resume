//var fs = require('fs');
function profileState($stateProvider) {
    $stateProvider
        .state('profile', {
            url: '/profile',
            templateUrl: '/app/pages/profile/profile.html',
            controller: 'ProfileCtrl as profileCtrl'
        })
}
profileState.$inject = ['$stateProvider'];
module.exports = profileState
