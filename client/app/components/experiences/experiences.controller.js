
function ExperiencesController($scope, $state, navBarAnimation, jobs){
	 $scope.navBarAnimation=navBarAnimation;
	 // if ($state.is('experiences')) {
  //       navBarAnimation.status = true;
  //       // navBarAnimation.background = 'experiences_state--background';
  //   }
	$scope.jobs = jobs;
	console.log('what is jobs', jobs);
	
}

ExperiencesController.$inject = ['$scope', '$state', 'navBarAnimation', 'jobs'];

module.exports = ExperiencesController;