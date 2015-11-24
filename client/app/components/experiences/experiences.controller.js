
function ExperiencesController($rootScope, $scope, $state, navBarAnimation, jobs, gmap){
	 $scope.navBarAnimation=navBarAnimation;
	 // if ($state.is('experiences')) {
  //       navBarAnimation.status = true;
  //       // navBarAnimation.background = 'experiences_state--background';
  //   }
	$scope.triggerReset = function(){
			console.log('scroll reset');
		$rootScope.$broadcast('scrollpointShouldReset');

	}

	$scope.scrollAction = function(element, distance) {
		console.log('scroll actioning');
		$scope.apply(function(){
			$scope.$applyClass = (distance < 0) ? 'warning' : 'info';
			$scope.actionDistance = distance;
		});
	}
  	$scope.clicked=false;

	$scope.jobs = jobs;
	$scope.custom = {
		controller: "ExperiencesModalController as experiencesModalController",
		template: "/app/components/experiences/experiences.item.html"
	}

	// console.log('what is gmap inside regular controller', gmap);
	$scope.gmap = gmap;
}

ExperiencesController.$inject = ['$rootScope','$scope', '$state', 'navBarAnimation', 'jobs', 'gmap'];

module.exports = ExperiencesController;
