//var fs = require('fs');
function SignUpState($stateProvider) {
    $stateProvider
        .state('signup', {
            url: '/signup',
            views: {
                nav: {
                    template: '<navbar></navbar>'
                },
                content: {
                    templateUrl: '/app/components/signup/signup.html',
                    controller: 'SignUpController as signUpControler'
                }
            }

        })
}
SignUpState.$inject = ['$stateProvider'];
module.exports = SignUpState
