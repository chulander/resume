function event(){
	return {
		restrict: "EA",
		scope:{
			job: '=',
			done: '&'
		},
		templateUrl:'/app/pages/experience/event/event.html'
	}
}

module.exports = event;