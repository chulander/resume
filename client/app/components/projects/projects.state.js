function ProjectsState($stateProvider) {
    $stateProvider
        .state('projects', {
            url: '/projects',
            templateUrl: '/app/components/projects/projects.html',
            controller: 'ProjectsController as projectsControler',
            onEnter: function(navBarAnimation) {
                navBarAnimation.background = 'projects_state--background';
            }
        })
}
ProjectsState.$inject = ['$stateProvider'];
module.exports = /*@ngInject*/ ProjectsState
