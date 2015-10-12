
function ProfileController($scope, socials){
    $scope.socials = socials;
    console.log('what is socials', socials);
    
}

ProfileController.$inject = ['$scope', 'socials'];
module.exports = ProfileController;