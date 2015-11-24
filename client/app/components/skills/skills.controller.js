function SkillsController($scope, $state, navBarAnimation){
	if($state.is('skills')){
    	navBarAnimation.status=true;
    }	

  
  
}

SkillsController.$inject = ['$scope', '$state', 'navBarAnimation'];

module.exports = SkillsController;