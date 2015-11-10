function HomeState($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            //templateUrl: '/app/components/home/home.html',
            onEnter: function($stateParams, $state, $uibModal) {
                var modalInstance = $uibModal.open({
                    templateUrl: '/app/components/home/homeModal.html',
                    resolve: {
                        content: {
                            name: "Hi, I'm Bryan Chu",
                            title: "Full Stack Engineer",
                            question: "Want to learn more?"
                        }
                    },
                    controller: 'HomeController as homeController'
                // }).result.finally(function() {
                //     $state.go('^');
                // });
                }).result.then(function(s){
                    console.log('what is s', s);
                },function(f){
                    console.log('what is f', f);
                    $state.go('home.closed');
                });
            },
            onExit: function(navBarAnimation){
                console.log('are you leaving?', navBarAnimation);

                navBarAnimation.status = true;
            }

        })
        .state('home.closed', {
            url: '/closed',
            templateUrl: '/app/components/home/home.html',
            onEnter: function($stateParams, $state, $uibModal) {
                var modalInstance = $uibModal.open({
                    templateUrl: '/app/components/home/test.html',
                    controller: ['$scope','$state', function ($scope, $state) {

                        $scope.dismiss = function() {
                            $scope.$dismiss();
                        };

                        $scope.ok = function() {
                            $scope
                            $scope.$close(true);

                        };

                    }]
                }).result.finally(function() {
                    $state.go('home');
                });
            }

        })
}



HomeState.$inject = ['$stateProvider'];

module.exports = /*@ngInject*/ HomeState;



// function HomeState($stateProvider) {
//     $stateProvider
//         .state('home', {
//             url: '/',
//             templateUrl: '/app/components/home/home.html',
//             onEnter: function($state){
//                 $state.go('home.greeting');
//             }
//         })
//         .state('home.greeting', {
//             views: {
//                 "modal" : {

//             }
//         })
//             onEnter: function($stateParams, $state, $uibModal) {
//                 var modalInstance = $uibModal.open({
//                     templateUrl: '/app/components/home/homeModal.html',
//                     resolve: {
//                         content: {
//                             name: "Hi, I'm Bryan Chu",
//                             title: "Full Stack Engineer",
//                             question: "Want to learn more?"
//                         }
//                     },
//                     controller: 'HomeController as homeController'
//                 // }).result.finally(function() {
//                 //     $state.go('^');
//                 // });
//                 }).result.then(function(s){
//                     console.log('what is s', s);
//                 },function(f){
//                     console.log('what is f', f);
//                     $state.go('home.closed');
//                 });
//             }

//         })
//         .state('home.closed', {
//             url: 'closed',
//             // templateUrl: '/app/components/home/homeIcon.html',
//             onEnter: function($stateParams, $state, $uibModal) {
//                 var modalInstance = $uibModal.open({
//                     template: '<div class="circle"></div>',
//                     controller: ['$scope','$state', function HomeController($scope, $state) {

//                         $scope.dismiss = function() {
//                             $scope.$dismiss();
//                         };

//                         $scope.ok = function() {
//                             $scope
//                             $scope.$close(true);

//                         };

//                     }]
//                 }).result.finally(function() {
//                     $state.go('^');
//                 });
//             },
//             abstract: true

//         })
// }



// HomeState.$inject = ['$stateProvider'];

// module.exports = /*@ngInject*/ HomeState;

