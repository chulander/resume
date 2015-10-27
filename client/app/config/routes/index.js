'use strict';

function appConfig($urlRouterProvider, $locationProvider) {

    $locationProvider.html5Mode(true).hashPrefix('!');
    $urlRouterProvider
    	// .when('profile', function($state){
    	// 	$state.go('profile')
    	// })
    	// .when('home', function($state){
    	// 	$state.go('home')

    	// })
    	.otherwise('/');

}

appConfig.$inject = ['$urlRouterProvider', '$locationProvider'];

module.exports = appConfig;
