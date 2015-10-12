'use strict';

module.exports = angular.module('app.pages', [
        require('./profile').name,
        require('./experience').name,
        require('./home').name,
        require('./skill').name,
        require('./resume').name,
        require('./signup').name,
        require('./login').name
    ])