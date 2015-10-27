function LoginController($scope, $state, navBarAnimation, Authentication) {
    if ($state.is('login')) {
        navBarAnimation.status = true;
    }
    $scope.loginUser = function(userData) {
        console.log('are you clicking?');
        Authentication.login(userData)
            .then(function(loggedinUser) {
                $state.go('experience', {
                    id: loggedinUser._id
                });
            })
            .catch(function(e) {
                console.log('error logging in', e);
            });
    };
}

LoginController.$inject = ['$scope', '$state', 'navBarAnimation', 'Authentication'];
module.exports = LoginController;
