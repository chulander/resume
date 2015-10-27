function HomeController($scope, $state, navBarAnimation) {
    $scope.clickButton = false;

    if ($state.is('home')) {
        navBarAnimation.status = false;
    }
    $scope.switchPage = function() {
        this.clickButton = true;
        navBarAnimation.status = true;
    }

    var job = 'Full Stack Engineer';
    $scope.letters = job;


}

HomeController.$inject = ['$scope', '$state', 'navBarAnimation'];
module.exports = HomeController;
