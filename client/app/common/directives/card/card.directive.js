function card(){
	return {
		restrict: "EA",
		scope:{
			card: '=',
		},
		templateUrl:'/app/common/directives/card/card.html'
		
	}
}

module.exports = card;