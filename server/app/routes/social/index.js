'use strict';

var Social = require('mongoose').model('Social');
var router = require('express').Router();

module.exports = router;

router.get('/', function (req, res, next) {
	console.log('start')
	Social.find({}).exec()
		.then(function(item){
			if(item) res.json(item);
			else return;
		})
		.then(null,next);
 
});