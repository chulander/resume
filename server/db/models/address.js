'use strict';

var mongoose = require('mongoose');

var schema = new mongoose.Schema({
    line1: {
        type: String,
        required: true
    },
    line2: {
        type: String
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    }

});

schema.virtual('mapAddress').get(function(){
    return this.line1 + ',' + this.city + ',' + this.state + ',' + this.zip;
})

schema.set('toJSON', {getters: true, virtuals: true
});

schema.set('toObject', {getters: true, virtuals: true

});
mongoose.model('Address', schema);