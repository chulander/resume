function ContactController($scope, $state, navBarAnimation, backendData) {
    if ($state.is('signup')) {
        navBarAnimation.status = true;
    }

    //default value;
    $scope.user = {};
    $scope.user.intent='hire';

    $scope.dismiss = function() {
        $scope.$dismiss();
    };

    // $scope.email = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;
    $scope.hide=true;
    $scope.save = function() {
        $scope.hide=false;

        backendData.postInterest($scope.user)
            .success(function(){
                console.log('success')
                $scope.$close(true);

            })
            .error(function(err){
                console.log('error');
                $scope.$dismiss(err)
            })
            
    };

        
    // $scope.signupUser = function(userData) {
    //     Authentication.signup(userData)
    //         .then(function(signedupUser) {
    //             $state.go('login', {
    //                 id: signedupUser._id
    //             });
    //         })
    // }
}

ContactController.$inject = ['$scope', '$state', 'navBarAnimation', 'backendData']
module.exports = ContactController;
