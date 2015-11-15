function ExperiencesModalController($scope, $uibModalInstance, content,uiGmapGoogleMapApi) {

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

    uiGmapGoogleMapApi.then(function(maps) {
        $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 8 };
    });
}
ExperiencesModalController.$inject = ['$scope', '$uibModalInstance', 'content', 'uiGmapGoogleMapApi'];

module.exports = ExperiencesModalController;
