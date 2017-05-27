//geoLocationPage
 var x = document.getElementById("geoLocation");
function getLocation(){
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showPosition);
		
		
	}
	else{
		x.innerHTML = "GeoLocation is not supported by this browser.";
	}
}

function showPosition(position){
	
	/*var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	document.getElementById("txt1").value= latitude +',' +longitude;*/
	
	
	x.innerHTML = "Latitude" + position.coords.latitude + 
	"<br>Longtitude: " + position.coords.longitude;
}

$(document).on('click','#getGeoLocation',function(){
	console.log("Clicked ! . . ");
	getLocation();
}); 

//map Page

/*var y = document.getElementById("map-canvas");
var mapLatitude;
var mapLongtitude;
var myLatLng;

function getMapLocation(){
	console.log("getMapLocation");
	if(navigator.geolocation){
		navigator.geolocation.getCurrentPosition(showMapPosition);
	}
	else{
		y.innerHTML = "MapLocation is not supported by this browser.";
	}
}

function showMapPosition(position){
	console.log("showMapLocation");
	mapLatitude = position.coords.latitude;
	mapLongtitude = position.coords.longtitude;
	myLatLng = new google.maps.LatLng(mapLatitude,mapLongtitude);
	getMap();
}
*/

// map-canvas.html

var map = document.getElementById("map-canvas");
function getMap(){
	console.log("getMap");
	var mapOptions = {
			center : new google.maps.LatLng(12.934797, 80.2107631),
			zoom : 12,
			mapTypeId : google.maps.MapTypeId.ROADMAP,
			scrollwheel : true,
			draggable : true,
			// maxZoom:12,
			// minZoom:8,
			zoomControlOptions : {
				position : google.maps.ControlPosition.RIGHT_TOP,
				style : google.maps.ZoomControlStyle.DEFAULT
			},
			panControlOptions : {
				position : google.maps.ControlPosition.RIGHT_TOP
			}
		};
	
	map = new google.maps.Map(map,mapOptions);
	
	var locations = [];

	locations.push({
		name : "Pallikaranai",
		latlng : new google.maps.LatLng(12.934797, 80.2107631)
	});
	locations.push({
		name : "Alwarpet",
		latlng : new google.maps.LatLng(13.0336433, 80.2505179)
	});
	locations.push({
		name : "Navalur",
		latlng : new google.maps.LatLng(12.8447728, 80.225463)
	});
	locations.push({
		name : "Chromepet",
		latlng : new google.maps.LatLng(12.9531946, 80.1416008)
	});
	locations.push({
		name : "Velachery",
		latlng : new google.maps.LatLng(12.975971, 80.2212092)
	});
	locations.push({
		name : "Thiruvanmiyur",
		latlng : new google.maps.LatLng(12.9830269, 80.2594001)
	});
	locations.push({
		name : "Medavakkam",
		latlng : new google.maps.LatLng(12.9171427, 80.1923489)
	});

	for (var i = 0; i < locations.length; i++) {
		var marker = new google.maps.Marker({
			position : locations[i].latlng,
			map : map,
			title : locations[i].name
		});
		
		
	}
	
	
	
	
	document.getElementById('submit').addEventListener(
			'click',
			function() {
				calculateAndDisplayRoute(directionsService,
						directionsDisplay);
			});
}
window.onload = getMap;

//directions Page

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	var waypts = [];
	var checkboxArray = document.getElementById('waypoints');
	for (var i = 0; i < checkboxArray.length; i++) {
		if (checkboxArray.options[i].selected) {
			waypts.push({
				location : checkboxArray[i].value,
				stopover : true
			});
		}
	}

	directionsService.route({
		origin : document.getElementById('start').value,
		destination : document.getElementById('end').value,
		waypoints : waypts,
		optimizeWaypoints : true,
		travelMode : 'DRIVING'
	}, function(response, status) {
		if (status === 'OK') {
			directionsDisplay.setDirections(response);

			var route = response.routes[0];
			var summaryPanel = document
					.getElementById('directions-panel');
			summaryPanel.innerHTML = '';
			// For each route, display summary information.
			for (var i = 0; i < route.legs.length; i++) {
				var routeSegment = i + 1;
				summaryPanel.innerHTML += '<b>Route Segment: '
						+ routeSegment + '</b><br>';
				summaryPanel.innerHTML += route.legs[i].start_address
						+ ' to ';
				summaryPanel.innerHTML += route.legs[i].end_address
						+ '<br>';
				summaryPanel.innerHTML += route.legs[i].distance.text
						+ '<br><br>';
			}
		} else {
			window.alert('Directions request failed due to ' + status);
		}
	});
}





