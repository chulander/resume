function HomeController($scope, $element, navBarAnimation) {
	console.log('what is element', $element);
	$scope.switchPage = function(){
		console.log('home controller preset, navBarAnimation', navBarAnimation);
		this.clickButton = true;
		navBarAnimation.status=!navBarAnimation.status;
		console.log('home controller post, navBarAnimation', navBarAnimation);
	}
	
	var job= 'Full Stack Engineer';
	$scope.letters = job;
	$scope.clickButton = false;
	$scope.hoverButton = false;
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

HomeController.$inject = ['$scope', '$element', 'navBarAnimation'];
module.exports = HomeController;
