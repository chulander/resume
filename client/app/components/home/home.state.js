function HomeState($stateProvider) {
    $stateProvider
        .state('home', {
            url: '/',
            template: '<div class="home_state"></div>',
            onEnter: function($stateParams, $state, $uibModal, navBarAnimation) {

                navBarAnimation.background = 'home_state--background';
                navBarAnimation.status = false;
                navBarAnimation.nextState = 'profile';
                navBarAnimation.nextStateDelay = 1000;
                var modalInstance = $uibModal.open({
                    templateUrl: '/app/components/home/home.modal.html',
                    resolve: {
                        content: {
                            name: "Hi, I'm Bryan Chu",
                            title: "Full Stack Engineer",
                            question: "Want to learn more?"
                        }
                    },
                    size: 'lg',
                    backdrop: 'static',
                    keyboard: 'false',
                    controller: 'HomeController as homeController'
                })

                modalInstance.result
                    .then(function(success) {
                        console.log('go go home_state leaver', success);
                        $state.go(success.nextState);
                        // setTimeout(function() {
                        //     console.log('delayed close by ', success);
                        // $state.go(success.nextState);
                        // }, success.nextStateDelay);

                    }, function(error) {
                        console.log('what is error', error);
                        $state.go('^');
                    });
            }
        })
}

// function HomeState($stateProvider) {
//     $stateProvider
//         .state('home', {
//             url: '/',
//             template: '<div class="home_state"></div>',
//             onEnter: function($state) {
//                 $state.go('home.greeting');
//             }
//         })
//         .state('home.greeting', {
//             url: 'greeting',
//             onEnter: function($stateParams, $state, $uibModal, navBarAnimation) {
//                 navBarAnimation.background = 'home_state--background';
//                 navBarAnimation.status = false;
//                 navBarAnimation.nextState = 'profile';
//                 navBarAnimation.nextStateDelay = 2000;
//                 var modalInstance = $uibModal.open({
//                     templateUrl: '/app/components/home/home.modal.html',
//                     resolve: {
//                         content: {
//                             name: "Hi, I'm Bryan Chu",
//                             title: "Full Stack Engineer",
//                             question: "Want to learn more?"
//                         }
//                     },
//                     size: 'lg',
//                     // backdrop: 'static',
//                     // keyboard: 'false',
//                     controller: 'HomeController as homeController'
//                 })

//                 modalInstance.result
//                     .then(function(success) {
//                         console.log('go go home_state leaver', success);
//                         $state.go(success.nextState);
//                         setTimeout(function() {
//                             console.log('delayed close by ', success);

//                         }, success.nextStateDelay);

//                     }, function(error) {
//                         console.log('what is error', error);
//                         $state.go('.interest');
//                     });
//             }
//         })
//         .state('home.interest', {
//                 templateUrl: '/app/components/home/home.interest.html',
//                 controller: 'HomeInterestController as HomeInterestController',
//                 onEnter: function($stateParams, $state, navBarAnimation) {
//                     console.log('what i cubey navbar', navBarAnimation)
//                 }
//         })

// }



HomeState.$inject = ['$stateProvider'];

module.exports = /*@ngInject*/ HomeState;
