function HomeController($scope, $state, navBarAnimation, content, $uibModalInstance) {
    // $scope.clickButton = false;

    if ($state.is('home')) {
        navBarAnimation.status = false;
        navBarAnimation.background = 'home_state--background';
        $scope.content = content;

    }
    // $scope.switchPage = function() {
        
    // }
    console.log('what is the status', navBarAnimation.status);
    // var job = 'Full Stack Engineer';
    // $scope.letters = job;


    $scope.dismiss = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.ok = function() {
        this.clickButton = true;
        navBarAnimation.status = true;

        $uibModalInstance.close(true);
        
        

    };

}

HomeController.$inject = ['$scope', '$state', 'navBarAnimation', 'content', '$uibModalInstance'];
module.exports = HomeController;
