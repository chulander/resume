
function ExperienceCtrl($scope, jobs){
	$scope.jobs = jobs;
}

ExperienceCtrl.$inject = ['$scope', 'jobs'];

module.exports = ExperienceCtrl;