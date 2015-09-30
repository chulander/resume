
function homeState($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeCtrl as homeCtrl',
            templateUrl: '/app/pages/home/home.html',
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
homeState.$inject = ['$stateProvider'];

module.exports = homeState
