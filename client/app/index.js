'use strict';


// var dependencies = [
// 'meanResume']
//require('scrollreveal');
// var sk = require('scrollreveal')
// console.log('what is skroll', sk);
var angular = require('angular');
var app = angular.module('app', [

	require('angular-ui-bootstrap'),
	require('angular-ui-router'),
	require('angular-animate'),
	require('./common').name,
	require('./navbar').name,
	require('./pages').name
	])
    .config(require('./config'));

//console.log('yo name' , require('./navbar').name);

module.exports = app;


