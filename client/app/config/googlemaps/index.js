// require('angular-google-maps')

function GoogleMaps(uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
        key: 'AIzaSyAeRDxntrKEm9wyuqRe8arA5lb2ljM_C6o',
        v: '3.20', //defaults to latest 3.X anyhow
        libraries: 'weather,geometry,visualization'
    });
}

//GoogleMaps.$inject = ['uiGmapGoogleMapApiProvider)'];


module.exports = /*@ngInject*/ GoogleMaps;

