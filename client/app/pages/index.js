'use strict';

module.exports = angular.module('app.pages', [
        require('./experience').name,
        require('./profile').name,
        require('./home').name,
        require('./skill').name,
        require('./resume').name
    ])