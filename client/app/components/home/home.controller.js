function HomeCtrl($scope, $element) {
	console.log('what is element', $element);
	$scope.fade = false;
	$scope.switchPage = function(){
		console.log('are you clicking?');
		this.fade = true;
	}
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

HomeCtrl.$inject = ['$scope', '$element'];
module.exports = HomeCtrl;
