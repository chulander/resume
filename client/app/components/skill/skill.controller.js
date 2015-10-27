function SkillCtrl($scope, $state, navBarAnimation){
	if($state.is('skill')){
    	navBarAnimation.status=true;
    }	

  
  
}

SkillCtrl.$inject = ['$scope', '$state', 'navBarAnimation'];

module.exports = SkillCtrl;