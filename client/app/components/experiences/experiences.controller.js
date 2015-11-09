
function ExperiencesController($scope, $state, navBarAnimation, jobs){
	 if ($state.is('experiences')) {
        navBarAnimation.status = true;
    }
	$scope.jobs = jobs;
	console.log('what is jobs', jobs);
	
}

ExperiencesController.$inject = ['$scope', '$state', 'navBarAnimation', 'jobs'];

module.exports = ExperiencesController;