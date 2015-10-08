
function ProfileCtrl($scope, socials){
    $scope.socials = socials;
    console.log('what is socials', socials);
    
}

ProfileCtrl.$inject = ['$scope', 'socials'];
module.exports = ProfileCtrl;