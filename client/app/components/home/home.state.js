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

function homeState($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            controller: 'HomeCtrl as homeCtrl',
            views: {
				content: {
		        	templateUrl: '/app/components/home/home.html'
				}            	
            }
        })
}
homeState.$inject = ['$stateProvider'];

module.exports = homeState;
