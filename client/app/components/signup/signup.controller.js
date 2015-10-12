function SignUpController($scope, Authentication, $state){
	$scope.signupUser = function(userData){
		Authentication.signup(userData)
		.then(function(signedupUser){
			$state.go('login', {id: signedupUser._id});
		})
	}
}

SignUpController.$inject = ['$scope', 'Authentication', '$state']
module.exports = SignUpController;