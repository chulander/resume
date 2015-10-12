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
            controller: 'HomeController as homeController',
            views: {
				content: {
		        	templateUrl: '/app/components/home/home.html'
				}            	
            }
        })
}
HomeState.$inject = ['$stateProvider'];

module.exports = HomeState;
