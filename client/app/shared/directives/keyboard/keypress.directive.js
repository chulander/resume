function Keypress() {
    return {
        restrict: "A",
        scope: {},
        link: function(scope, elem, attrs) {
            elem.bind('keypress keydown', function(event) {
            	
                if (event.keyCode === 39) {
                	event.preventDefault();
                	//right
                	console.log('what is event', event);
                }
                if (event.keyCode === 37) {
                	//right
                	event.preventDefault()
                	console.log('what is event', event);
                }
            })
        }
    }
}
    module.exports = Keypress;
