function Authentication ($http, $state, $rootScope){
	$rootScope.isLoggedIn = false;
	$rootScope.isAdmin = false;
	$rootScope.currentUser = null;
	return {
		signup: function (credentials){
			return $http.post('/api/users', credentials)
			.then(function(response){
				return response.data;
			})
			.then(function(user){
				$rootScope.isLoggedIn = true;
				$rootScope.currentUser = user;
				return user;
			})
		},
		login: function (credentials) {
			return $http.post('/login', credentials)
			.then(function (response) {
				return response.data;
			})
			.then(function (user) {
				$rootScope.isLoggedIn = true;
				$rootScope.isAdmin = user.isAdmin;
				$rootScope.currentUser = user;
				return user;
			})
		},
		logout: function () {
			$http.get('/logout').then(function () {
				$rootScope.isLoggedIn = false;
				$rootScope.isAdmin = false;
				$rootScope.currentUser = null;
				$state.go('home');
			});
		},
	}


}

Authentication.$inject = ['$http', '$state', '$rootScope'];
module.exports = Authentication;