
function ExperiencesController($scope, $state, navBarAnimation, jobs,uiGmapGoogleMapApi){
	 $scope.navBarAnimation=navBarAnimation;
	 // if ($state.is('experiences')) {
  //       navBarAnimation.status = true;
  //       // navBarAnimation.background = 'experiences_state--background';
  //   }
	$scope.jobs = jobs;
	console.log('what is jobs', jobs);
	
	uiGmapGoogleMapApi.then(function(maps) {
        console.log("what is maps", maps);
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });
}

ExperiencesController.$inject = ['$scope', '$state', 'navBarAnimation', 'jobs','uiGmapGoogleMapApi'];

module.exports = ExperiencesController;