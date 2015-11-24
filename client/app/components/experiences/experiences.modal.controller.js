function ExperiencesModalController($scope, $uibModalInstance, content, uiGmapIsReady, mapOptions) {

    $scope.ok = function() {
        $uibModalInstance.close();
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss('cancel');
    };

    //add the map to the scope
    $scope.map = mapOptions;
    uiGmapIsReady.promise().then(function(maps){
        
        // $scope.control.refresh();

    })

    $scope.content = JSON.parse(content);

}
ExperiencesModalController.$inject = ['$scope', '$uibModalInstance', 'content', 'uiGmapIsReady', 'mapOptions'];

module.exports = /* @ngInject */ ExperiencesModalController;
