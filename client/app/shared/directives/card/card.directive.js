function Card(){
	return {
		restrict: "EA",
		scope:{
			card: '=',
		},
		templateUrl:'/app/shared/directives/card/card.html'
		
	}
}

module.exports = Card;