function spinner(){
	return {
		restrict: "EA",
		scope:{
			spinner: '=',
		},
		templateUrl:'/app/common/directives/spinner/spinner.html'
		
	}
}

module.exports = spinner;