function ExperiencesModalController($scope, $uibModalInstance, content) {

    // $scope.career = {
    // 	company: content.company,
    // 	title: content.title,
    // 	startDate: content.startDate,
    // 	endDate: content.endDate,
    // 	title: content.title,
    // 	position: content.position
    // };
    // this.content = content;
    // console.log('what is $scope content', this.content);

	$scope.content = JSON.parse(content); 
    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        
         $timeout(function() {
            $uibModalInstance.dismiss('cancel');
        }, 2000);

    };

}
ExperiencesModalController.$inject = ['$scope', '$uibModalInstance', 'content'];

module.exports = ExperiencesModalController;
