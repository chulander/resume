function event(){
	return {
		restrict: "EA",
		scope:{
			job: '=',
			done: '&'
		},
		templateUrl:'/app/common/directives/event/event.html'
		
	}
}

module.exports = event;