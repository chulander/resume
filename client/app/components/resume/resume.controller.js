function ResumeController($scope, $state, navBarAnimation) {
    if ($state.is('resume')) {
        navBarAnimation.status = true;
    }
    this.title = 'profile check';
}

ResumeController.$inject = ['$scope', '$state', 'navBarAnimation'];

module.exports = ResumeController;
