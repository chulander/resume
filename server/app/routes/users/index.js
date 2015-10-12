'use strict';

var router = require('express').Router();
var User = require('mongoose').model('User');
module.exports = router;



// router.param('id', function(req, res, next, id){
// 	User.findById(id).exec()
// 		.then(function(user){
// 			if(!user){
// 				next();
// 			}
// 			else{
// 				req.requestedUser = user;
// 				next();
// 			}
// 		})
// });

// router.get('/', function(req, res, next){
// 	User.find({}).exec()
// 		.then(function(users){
// 			res.json(users);
// 		})
// 		.then(null, next)
// })

// router.get('/:id', function(req, res, next){
// 	if(req.requestedUser) {
// 		req.json(req.requestedUser);
// 	}
// 	else {
// 		next();
// 	}

// })
router.post('/', function(req, res, next){
	User.create(req.body)
		.then(function(user){
			res.status(201).json(user);
		})
		.then(null, next);
});
