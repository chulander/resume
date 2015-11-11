function backendData ($http){
	var data = {};

	data.getSocials = function() {
		return $http.get('/api/social');
	}

	data.getExperiences = function() {
		return $http.get('/api/experiences');
	}
	
	return data;
}


backendData.$inject = ['$http'];
module.exports = backendData;