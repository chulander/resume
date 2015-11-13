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
            },
            onExit: function(navBarAnimation) {
                navBarAnimation.prevState='home';
            }
        })
}


HomeState.$inject = ['$stateProvider'];

module.exports = /*@ngInject*/ HomeState;
