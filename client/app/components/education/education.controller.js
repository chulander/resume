function EducationController($scope, $state, navBarAnimation) {
    if ($state.is('Education')) {
        navBarAnimation.status = true;
    }
    this.title = 'profile check';
}

EducationController.$inject = ['$scope', '$state', 'navBarAnimation'];

module.exports = EducationController;
