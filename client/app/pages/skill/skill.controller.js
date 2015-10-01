function SkillCtrl($scope){
	// var test = require('gsap');

	// console.log('what is test', test);
  this.title = 'profile check';
  var logo = document.getElementById("logo");
    //TweenLite.to(logo, 1, {left:"632px"});
    //TweenLite.to(logo, 3, {left:"440px", ease:Bounce.easeOut});
}

SkillCtrl.$inject = ['$scope'];

module.exports = SkillCtrl;