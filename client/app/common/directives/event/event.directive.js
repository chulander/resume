function event($modal, $log){
	return {
		restrict: "EA",
		scope:{
			job: '=',
			done: '&'
		},
		transclude: true,
		templateUrl:'/app/common/directives/event/event.html',
		 link: function(scope, element, attrs){

            element.bind('click', function(){

                var template = 
                    '<div class="modal-body">' + 
                    // '<button ng-click="$close()" type="button" class="close" aria-label="Close">' +
                    // '<span aria-hidden="true">&times;</span>' +
                    // '</button>' +
                    '</div>';

                // see modal reference from ui bootstrap at <http://angular-ui.github.io>
                var modalInstance = $modal.open({
                    animation: true,
                    templateUrl: '/app/common/directives/event/event.html',
                    controller: scope.modalController,                    
                });
            });
        }
	}
}

event.$inject = ['$modal', '$log'];

module.exports = event;