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
                    templateUrl: '/app/components/contact/contact.modal.html',
                    controller: 'ContactController as contactController'
                }).result.finally(function() {
                    $state.go('^');
                });
            }
        })
}
ContactState.$inject = ['$stateProvider'];
module.exports = /*@ngInject*/ ContactState;
