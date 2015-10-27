function SignUpController($scope, $state, navBarAnimation, Authentication) {
    if ($state.is('signup')) {
        navBarAnimation.status = true;
    }

    $scope.signupUser = function(userData) {
        Authentication.signup(userData)
            .then(function(signedupUser) {
                $state.go('login', {
                    id: signedupUser._id
                });
            })
    }
}

SignUpController.$inject = ['$scope', '$state', 'navBarAnimation', 'Authentication']
module.exports = SignUpController;
