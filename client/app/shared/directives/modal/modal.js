function MyModal($uibModal) {

    return {
        transclude: true,
        restrict: 'EA',
        template: '<a ng-click="open()" ng-transclude></a>',
        scope: {
            useCtrl: "@",
            content: "@",
            gmap: "="
        },
        link: function(scope, element, attrs) {

            scope.open = function() {

                var geocoder = new scope.gmap.Geocoder();
                console.log('what is geocoder', geocoder);
                var mapOptions = {};
                geocoder.geocode({
                    'address': JSON.parse(scope.content).address.mapAddress
                }, function(results, status) {
                    if (status = scope.gmap.GeocoderStatus.OK) {
                        mapOptions.center = {
                                latitude: results[0].geometry.location.lat(),
                                longitude: results[0].geometry.location.lng()
                            }
                        mapOptions.zoom = 15
                    }else {
                        alert('Geocode was not successful for the following reason ' + status);
                    }
                })
                // console.log('mapOptions inside directive', mapOptions);
                var modalInstance = $uibModal.open({
                    templateUrl: attrs.modalTemplate,
                    controller: attrs.modalController,
                    size: 'lg',
                    // windowClass: 'app-modal-window',
                    windowClass: 'event--modal',
                    backdrop: true,
                    resolve: {
                        content: function() {
                            return scope.content;
                        },
                        mapOptions: function(){
                            return mapOptions;
                        }
                    }
                });
                modalInstance.result
                    .then(function(success) {
                        console.log('Finished', success);
                    }, function(error) {
                        console.log('Modal dismissed at : ' + new Date());
                    });

            }
        }
    }
}
MyModal.$inject = ['$uibModal'];
module.exports = MyModal;
