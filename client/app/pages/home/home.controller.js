
function HomeCtrl($scope, jobs){
	$scope.jobs = jobs;
}

HomeCtrl.$inject = ['$scope'];
module.exports = HomeCtrl;