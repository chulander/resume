//var fs = require('fs');
function LoginState($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            views: {
                nav: {
                    template: '<navbar></navbar>'
                },
                content: {
                    templateUrl: '/app/components/login/login.html',
                    controller: 'LoginController as loginControler'
                }
            }

        })
}
LoginState.$inject = ['$stateProvider'];
module.exports = LoginState
