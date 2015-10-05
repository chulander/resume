
function ProfileCtrl($scope, socials){
    $scope.socials = socials;
}

ProfileCtrl.$inject = ['$scope', 'socials'];
module.exports = ProfileCtrl;