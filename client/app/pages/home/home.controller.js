
function HomeCtrl($scope, socials){
	$scope.socials = socials;
}

HomeCtrl.$inject = ['$scope', 'socials'];
module.exports = HomeCtrl;