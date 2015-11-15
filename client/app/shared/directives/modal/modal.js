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

            scope.open = function(){

                var modalInstance = $uibModal.open({
                    // templateUrl: '/app/shared/directives/modal/modal.html',
                    templateUrl: attrs.instanceTemplate,
                    controller:  scope.useCtrl,
                    size: 'lg',
                    windowClass: 'app-modal-window',
                    
                    backdrop: true,
                    backdropClass: 'animated fadeIn experience_state__timeline__item--modal',
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
