
function ExperiencesController($scope, $state, navBarAnimation, jobs, gmap){
	 $scope.navBarAnimation=navBarAnimation;
	 // if ($state.is('experiences')) {
  //       navBarAnimation.status = true;
  //       // navBarAnimation.background = 'experiences_state--background';
  //   }
  	$scope.clicked=false;
  	
	$scope.jobs = jobs;
	$scope.custom = {
		controller: "ExperiencesModalController as experiencesModalController",
		template: "/app/components/experiences/experiences.item.html"
	}
	
	// console.log('what is gmap inside regular controller', gmap);		
	$scope.gmap = gmap;
}

ExperiencesController.$inject = ['$scope', '$state', 'navBarAnimation', 'jobs', 'gmap'];

module.exports = ExperiencesController;