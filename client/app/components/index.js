'use strict';

module.exports = angular.module('app.pages', [
        require('./home').name,
        require('./profile').name,
        require('./experiences').name,
        require('./education').name,
        require('./skills').name,
        require('./projects').name,
        require('./contact').name
        
    ])