//var fs = require('fs');
function ContactState($stateProvider) {
    $stateProvider
        .state('contact', {
            url: '/contact',
            // templateUrl: '/app/components/contact/contact.html',
            // controller: 'ContactController as contactControler',
            onEnter: function( $stateParams, $state, $uibModal, navBarAnimation) {
                navBarAnimation.background = 'contact_state--background';
                navBarAnimation.status = true;
                var modalInstance = $uibModal.open({
                    backdrop: 'static',
                    keyboard: 'false',
                    templateUrl: '/app/components/contact/contact.modal.html',
                    controller: 'ContactController as contactController'
                })

                modalInstance.result
                    .then(function(success) {
                        $state.go(navBarAnimation.prevState || 'home');
                }, function(error){
                    console.log('error', error);
                });
            }
        })
        .state('contact.loading', {
            template: '<i class="fa fa-refresh fa-spin"></i>'
        })
        .state('contact.failure', {

        })
}
ContactState.$inject = ['$stateProvider'];
module.exports = /*@ngInject*/ ContactState;
