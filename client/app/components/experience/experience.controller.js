
function ExperienceController($scope, jobs){
	$scope.jobs = jobs;
}

ExperienceController.$inject = ['$scope', 'jobs'];

module.exports = ExperienceController;