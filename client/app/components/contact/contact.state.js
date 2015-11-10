//var fs = require('fs');
function ContactState($stateProvider) {
    $stateProvider
        .state('contact', {
            url: '/contact',
            // templateUrl: '/app/components/contact/contact.html',
            // controller: 'ContactController as contactControler',
            onEnter: function( $stateParams, $state, $uibModal) {
                $uibModal.open({
                    templateUrl: '/app/components/contact/contact.html',
                    resolve: {
                        item: function() {
                            return '123';
                        }
                    },
                    controller: 'ContactController as contactControler'
                }).result.finally(function() {
                    $state.go('^');
                });
            }
        })
}
ContactState.$inject = ['$stateProvider'];
module.exports = /*@ngInject*/ ContactState;
