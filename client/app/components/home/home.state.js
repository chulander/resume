// function homeState($stateProvider) {
//     $stateProvider
//         .state('home', {
//             url: '/',
//             controller: 'HomeCtrl as homeCtrl',
//             templateUrl: '/app/pages/home/home.html'
//         })
// }
// homeState.$inject = ['$stateProvider'];

// module.exports = homeState;

function HomeState($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            views: {
                content: {
                    controller: 'HomeController as homeController',
                    templateUrl: '/app/components/home/home.html'                
                }
            }
        })
}
HomeState.$inject = ['$stateProvider'];

module.exports = HomeState;
