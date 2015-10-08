function arrowDown($uiViewScroll,$window, myData) {
    return {
        restrict: "EA",
        template: '<a ng-click="moveDown()"><i class="fa fa-hand-o-down fa-5x"></i></a>',
        
        link: function(scope, elem, attr) {
          var targetElem = angular.element($window.document.getElementById('foo'));

          elem.on('click', function(){
            console.log('what is myData', myData);
            console.log('what is targetelem', targetElem);
            console.log('what is attr', attr);
            $uiViewScroll(targetElem);
          }) 
        }
        // link: function(scope, element) {
        //    	element.on('mouseenter', function(){
        //    		console.log('im mousing');
        //    	});

        //    	element.on('click', function(){
        //    		console.log('yo im clicked');
        //    	})

            // element.bind('click', function() {

            //     var elem = angular.element(document.getElementById('foo'));
            //     console.log('what is em', elem);
            //     // $uiViewScroll(elem).then(function() {
            //     //     $window.scrollTo(0, 1);
            //     // })
            //     $uiViewScroll(elem);
            // })

        //}
    }
}

arrowDown.$inject = ['$uiViewScroll', '$window','myData'];
module.exports = arrowDown;
