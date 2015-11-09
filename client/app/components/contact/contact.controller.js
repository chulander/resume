function ContactController($scope, $state, navBarAnimation, Authentication) {
    if ($state.is('signup')) {
        navBarAnimation.status = true;
    }


    $scope.dismiss = function() {
        $scope.$dismiss();
    };

    $scope.save = function() {
        
            $scope.$close(true);
        
    };

    
    $scope.signupUser = function(userData) {
        Authentication.signup(userData)
            .then(function(signedupUser) {
                $state.go('login', {
                    id: signedupUser._id
                });
            })
    }
}

ContactController.$inject = ['$scope', '$state', 'navBarAnimation', 'Authentication']
module.exports = ContactController;
