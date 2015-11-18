function HomeController($scope, navBarAnimation, content, $uibModalInstance) {
    // $scope.clickButton = false;

    
        
    $scope.content = content;

    

    $scope.dismiss = function() {
        $uibModalInstance.dismiss('cancel');
    };

    $scope.ok = function() {
        navBarAnimation.status = true;

        $uibModalInstance.close(navBarAnimation);
        

    };

    $scope.$on('animationstart', function(t){
        console.log('home animation start', t);
    })

    $scope.$on('webkitAnimationstart', function(t){
        console.log('home animation start-web', t);
    })
 
    $scope.$on('webkitAnimationend', function(t){
        console.log('home animation done-web', t);
    })

    $scope.$on('animationend', function(t){
        console.log('home animation done', t);
    })
}

HomeController.$inject = ['$scope', 'navBarAnimation', 'content', '$uibModalInstance'];
module.exports = /*@ngInject*/ HomeController;
