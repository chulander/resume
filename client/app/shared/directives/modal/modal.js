function MyModal($uibModal) {

    return {
        transclude: true,
        restrict: 'EA',
        template: '<a ng-click="open()" ng-transclude>{{name}}</a>',
        scope: {
            useCtrl: "@",
            content: "@"
        },
        link: function(scope, element, attrs) {

            console.log('Attrs: ', attrs);
//            console.log('SCOPE: ', scope);Z
            
            scope.open = function(){

                console.log('scope open content', scope.content);
                var modalInstance = $uibModal.open({
                    templateUrl: '/app/shared/directives/modal/modal.html',
                    controller:  scope.useCtrl,
                    animation: true,
                    size: 'lg',
                    windowClass: 'app-modal-window',
                    // windowClass: 'animated lightSpeedIn',
                    backdrop: true,
                    // backdropClass: 'animated lightSpeedIn',
                    // windowClass: 'animated slideInLeft',
                    resolve: {
                        content: function(){
                           return scope.content;
                        }
                    }

                });

                modalInstance.result.then(function(){

                    console.log('Finished');
                }, function(){
                    console.log('what is scope content', scope.content) 
                    console.log('Modal dismissed at : ' + new Date());
                });
            };
        }
    };
}
MyModal.$inject = ['$uibModal'];
module.exports = MyModal;
