'use strict';


// var dependencies = [
// 'meanResume']
//require('scrollreveal');
// var sk = require('scrollreveal')
// console.log('what is skroll', sk);
var angular = require('angular');
// window._ = require('lodash');

var app = angular.module('app', [

	require('angular-ui-bootstrap'),
	require('angular-ui-router'),
	require('angular-animate'),
	require('./shared').name,
	require('./components').name,
	require('./config').name
	])


//console.log('yo name' , require('./navbar').name);

module.exports = app;
