function ProjectsState($stateProvider) {
    $stateProvider
        .state('projects', {
            url: '/projects',
            templateUrl: '/app/components/projects/projects.html',
            controller: 'ProjectsController as projectsControler'
        })
}
ProjectsState.$inject = ['$stateProvider'];
module.exports = ProjectsState
