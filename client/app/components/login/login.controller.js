function LoginController ($scope, Authentication, $state) {
	$scope.loginUser = function (userData) {
		console.log('are you clicking?');
		Authentication.login(userData)
		.then(function (loggedinUser) {
			$state.go('experience', {id: loggedinUser._id});
		})
		.catch(function (e) {
			console.log('error logging in', e);
		});
	};
}

LoginController.$inject = ['$scope', 'Authentication', '$state'];
module.exports = LoginController;
