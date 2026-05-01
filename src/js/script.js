

mapboxgl.accessToken = 'pk.eyJ1IjoiZmxpZ2h0ZWFtc3RhbmR1cCIsImEiOiJjbThyamw3azQweW9iMmtvbWM4N3Bhc2o0In0.fywVictmDFWXM_M_LhlnQA';

var mapProps = {
	container: 'map',
	center: [-73.97, 40.75],
	zoom: 9
};

var map = new mapboxgl.Map(mapProps);

var clickCount = 0;
var info = document.getElementById('info');

map.on('click', function(evt) {
	clickCount++;
	var lng = evt.lngLat.lng.toFixed(5);
	var lat = evt.lngLat.lat.toFixed(5);
	if (info) {
		info.value = 'Clicks: ' + clickCount + ' — ' + lng + ', ' + lat;
	}
});

map.on('dblclick', function(evt) {
	clickCount += 4;
	var lng = evt.lngLat.lng.toFixed(5);
	var lat = evt.lngLat.lat.toFixed(5);
	if (info) {
		info.value = 'Clicks: ' + clickCount + ' — ' + lng + ', ' + lat;
	}
});
