function ProfileController($scope, $state, navBarAnimation, socials) {
    $scope.socials = socials;
 
    $scope.$on('animationstart', function(t){
    	console.log('profile animation start', t);
    })
    $scope.$on('animationend', function(t){
        console.log('profile animation done', t);
    })
}

ProfileController.$inject = ['$scope', '$state', 'navBarAnimation', 'socials'];
module.exports = ProfileController;
