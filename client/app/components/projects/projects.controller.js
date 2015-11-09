function ProjectsController($scope, $state, navBarAnimation) {
    if ($state.is('projects')) {
        navBarAnimation.status = true;
    }
 
}

ProjectsController.$inject = ['$scope', '$state', 'navBarAnimation'];
module.exports = ProjectsController;
