'use strict';

// this will add it to the global namespace
// it's a dependency for angular-google-maps
window._ = require('lodash');
require('angular-simple-logger');
require('angular-google-maps');
require('angular-ui-scrollpoint');

module.exports = angular.module('app.config', ['uiGmapgoogle-maps','ui.scrollpoint'])
    .factory('Authentication', require('./authentication'))
    .config(require('./routes'))
    .config(require('./googlemaps'))
