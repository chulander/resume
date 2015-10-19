function HomeController($scope, $element) {
	console.log('what is element', $element);
	$scope.fade = false;
	$scope.switchPage = function(){
		console.log('are you clicking?');
		this.clickButton = true;
	}
	var job= 'Full Stack Engineer';
	$scope.letters = job;
	$scope.clickButton = false;
	// console.log('running?');
	// $scope.scrollTo = function(id) {
	// 	var elem = angular.element(document.getElementById(id));
	// 	console.log('what is em', elem);
	// 	$uiViewScroll(elem).then(function(){
	// 		$window.scrollTo(0,1);
	// 	})
	// 	// $uiViewScroll(elem);
	// }
	
}

HomeController.$inject = ['$scope', '$element'];
module.exports = HomeController;
