
function ExperienceCtrl($scope, jobs){
	$scope.jobs = jobs;

	$scope.model = {
		invert:false
	}

	$scope.toggleInvert = function(item){
		console.log('what is the value of invert', invert);
		
		
		$scope.model.invert = !item;

		console.log('what is the value of POST invert', $scope.invert);
	}
	console.log('what is jobs', jobs);
	//console.log("what is reveal", this.reveal);
	// this.inversion
	// 

}

ExperienceCtrl.$inject = ['$scope', 'jobs'];
module.exports = ExperienceCtrl;