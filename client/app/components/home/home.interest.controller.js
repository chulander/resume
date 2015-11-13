function HomeInterestController($scope, navBarAnimation) {
    // $scope.clickButton = false;
    navBarAnimation.states = angular.module('app.pages').requires;
    
    var original = navBarAnimation.states;

    var i = original.indexOf('home');
    if(i>=0) {
        original.splice(i,1);
    }

    var cubeSides = ['front', 'back', 'right', 'left', 'top', 'bottom'];
    // console.log('what is navBarAnimation in interest'. navBarAnimation.status);
    $scope.cubeSides = cubeSides;
    $scope.items = original;
    // console.log('how many states are there', original);
    console.log("interest working", navBarAnimation, $scope.cubeSides);




}

HomeInterestController.$inject = ['$scope', 'navBarAnimation'];
module.exports = /*@ngInject*/ HomeInterestController;
