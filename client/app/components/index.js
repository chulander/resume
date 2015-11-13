'use strict';

module.exports = angular.module('app.pages', [
        require('./home').name,
        require('./profile').name,
        require('./experiences').name,
        require('./skill').name,
        require('./education').name,
        require('./contact').name,
        require('./projects').name
    ])