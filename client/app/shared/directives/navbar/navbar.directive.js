'use strict';

function navbar(navBarAnimation, $window) {
  return {
    restrict: 'E',
    templateUrl: '/app/shared/directives/navbar/navbar.html',
    link: function(scope) {
      //this is for the hamburger responsive icon
      //scope.navBarAnimation = navBarAnimation;
      navBarAnimation.states = angular.module('app.pages').requires;
      scope.navBarAnimation = navBarAnimation;
      scope.items = navBarAnimation.states;

      var icons = {
        home: 'fa-home',
        experiences: 'fa-briefcase',
        education: 'fa-graduation-cap',
        contact: 'fa-file-text',
        profile: 'fa-user',
        projects: 'fa-folder',
        skills: 'fa-code'

      }


      // var remove = ['skills','education','projects'];
      // remove.forEach(function(item, index){
      //   console.log('iteration ', index);
      //     var idx = scope.items.indexOf(item);
      //     if(idx>=0){
      //         scope.items.splice(idx,1);
      //     }
      // })
      scope.icons = icons;




      scope.spans = new Array(3);


      // angular.element($window).bind("scroll", function(){
      //     if(!scope.scrollPosition){

      //         scope.scrollPosition=0;
      //     }
      //     if(this.pageYOffset > 40) {
      //         console.log('setting to TRUEE')
      //         navBarAnimation.navBarScroll = true;
      //     } else {

      //         navBarAnimation.navBarScroll = false;
      //     }
      //     scope.$apply(function(){

      //     });

      // })

    }
  }
}

navbar.$inject = ['navBarAnimation', '$window'];
module.exports = /*@ngInject*/ navbar;
