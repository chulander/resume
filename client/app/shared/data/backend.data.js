function backendData ($http){
	var data = {};

	data.getSocials = function() {
		return $http.get('/api/social');
	}

	data.getExperiences = function() {
		return $http.get('/api/experiences');
	}
	data.postInterest = function(input){
		return $http.post('/api/interest', input)
	}
	return data;
}


backendData.$inject = ['$http'];
module.exports = backendData;