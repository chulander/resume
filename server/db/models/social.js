'use strict';
var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    url: {
        type: String,
        require: true
    },
    className: {
        type: String
    },
    image: {
        type: String
    },
    caption: {
        type: String
    }
});

mongoose.model('Social', schema);