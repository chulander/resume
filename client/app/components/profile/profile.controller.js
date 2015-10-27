function ProfileController($scope, $state, navBarAnimation, socials) {

    $scope.socials = socials;
    if ($state.is('profile')) {
        navBarAnimation.status = true;
    }

}

ProfileController.$inject = ['$scope', '$state', 'navBarAnimation', 'socials'];
module.exports = ProfileController;
