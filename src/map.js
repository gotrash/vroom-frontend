'use strict';

var L = require('leaflet');
var LSetup = require('./config/leaflet_setup');
var panelControl = require('./controls/panel');
var locationsHandler = require('./utils/locations');
var geocoder = require('./utils/geocoder');
var address = require('./utils/address');

L.Icon.Default.imagePath = 'node_modules/leaflet/dist/images';

panelControl.addTo(LSetup.map);

LSetup.map.on('click', function(e){
  locationsHandler.addPlace(e.latlng);
});

geocoder.control.markGeocode = function(result){
  locationsHandler.addPlace(result.geocode.center,
                            address.display(result.geocode));
};

// TODO: switch on when
// https://github.com/perliedman/leaflet-control-geocoder/issues/142
// is solved

// geocoder.control.addTo(LSetup.map);
