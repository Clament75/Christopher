// Script For Map,MapOptions and Directions
function initMap() {

	var myLatLng = {
		lat : 12.934797,
		lng : 80.2107631
	};
	var directionsService = new google.maps.DirectionsService;
	var directionsDisplay = new google.maps.DirectionsRenderer;
	directionsDisplay = new google.maps.DirectionsRenderer({
		'draggable' : true
	});

	// Create a map object and specify the DOM element for display.
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom : 8,
		center : myLatLng
	});

	// Create a marker and set its position.
	/*var marker = new google.maps.Marker({
			position :myLatLng,
			map : map,
			title :'Pallikaranai'
	});*/

	directionsDisplay.setMap(map);

	var onChangeHandler = function() {
		calculateAndDisplayRoute(directionsService, directionsDisplay);
	};
	document.getElementById('start').addEventListener('change', onChangeHandler);
	document.getElementById('end').addEventListener('change', onChangeHandler);
	document.getElementById('waypoints').addEventListener('change',onChangeHandler);

	//Using Submit Button
	/*document.getElementById('submit').addEventListener(
			'click',
			function() {
				calculateAndDisplayRoute(directionsService,
						directionsDisplay);
			});*/

}

function calculateAndDisplayRoute(directionsService, directionsDisplay) {
	var waypts = [];
	var checkboxArray = document.getElementById('waypoint');
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
			var summaryPanel = document.getElementById('directions-panel');
			summaryPanel.innerHTML = '';
			// For each route, display summary information.
			for (var i = 0; i < route.legs.length; i++) {
				var routeSegment = i + 1;
				summaryPanel.innerHTML += '<b>Route Segment: ' + routeSegment
						+ '</b><br>';
				summaryPanel.innerHTML += route.legs[i].start_address + ' to ';
				summaryPanel.innerHTML += route.legs[i].end_address + '<br>';
				summaryPanel.innerHTML += route.legs[i].distance.text
						+ '<br><br>';
			}
		} else {
			//window.alert('Directions request failed due to ' + status);
		}
	});
}

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// Script for Dynamic Way_points
function wayPointsLoad() {
	var startwp = document.getElementById('start').value;
	var endwp = document.getElementById('end').value;

	//Tambaram to Pallikaranai	
	var tambaram_pallikaranai = "<select multiple id='waypoint' class='waypoints'>"
			+ "<option value='12.922546, 80.137202'>Selaiyur</option>"
			+ "<option value='12.922572, 80.143626'>Mahalakshmi Nagar</option>"
			+ "<option value='Rajakilpakkam Bus Stop'>Rajakilpakkam</option>"
			+ "<option value='Sembakkam'>Sembakkam</option>"
			+ "<option value='Gowrivakkam Bus Stop'>Gowrivakkam</option>"
			+ "<option value='Medavakkam Koot Road Bus Stop'>Medavakkam Junction</option>"
			+ "<option value='Medavakkam Bus Stop'>Medavakkam</option>"
			+ "<option value='Oil Mill Bus Stop'>Oil Mill Bus Stop</option>"
			+ " </select>";

	// Velachery to Pallikaranai
	var velachery_pallikaranai = "<select multiple id='waypoint' class='waypoints'>"
			+ "<option value='12.975700, 80.221145'>Vijayanagar</option>"
			+ "<option value='Velachery Station-Bus Stop'>Velachery Railway Station</option>"
			+ "<option value='12.961339, 80.215116'>Domino's Pizza</option>"
			+ "<option value='12.954023, 80.212299'>Balaji Nagar</option>"
			+ "<option value='12.948848,80.210272'>Kamatchi Hospital</option>"
			+ "<option value='12.94398,80.20828'>Balaji Dental College</option>"
			+ "<option value='12.938520, 80.205232'>Vinayaga Super Market</option>"
			+ "<option value='12.936800, 80.204724'>Javid Auto Carriage</option>"
			+ " </select>";

	//Chromepet to Pallikaranai
	var chromepet_pallikaranai = "<select multiple id='waypoint' class='waypoints'>"
			+ "<option value='12.952888, 80.142115'>Santhi Nagar</option>"
			+ "<option value='12.955925, 80.144268'>Station Border Begin</option>"
			+ "<option value='12.960145, 80.147283'>Station Border End</option>"
			+ "<option value='Pallavaram Bridge Bus Stop'>Pallavaram Bridge Bus Stop</option>"
			+ "<option value='12.951887, 80.171483'>D.J. Mat. School</option>"
			+ "<option value='12.950240, 80.178728'>Eshwari Caars</option>"
			+ "<option value='12.949339, 80.183932'>Eachankadu Junction</option>"
			+ "<option value='12.948628,80.200158'>Kamatchi Memorial Hospital</option>"

			+ " </select>";

	//Alwarpet to Pallikaranai
	var alwarpet_pallikaranai = "<select multiple id='waypoint' class='waypoints'>"
			+ "<option value='Kotturpuram'>Kotturpuram</option>"
			+ "<option value='Gandhi Mandapam'>Gandhi Mandapam</option>"
			+ "<option value='13.008097, 80.233509'>Anna University</option>"
			+ "<option value='13.009442, 80.227450'>Guindy Race Course</option>"
			+ "<option value='13.010499, 80.222867'>Halda Bus Stop</option>"
			+ "<option value='Gurunanak College'>Gurunanak College</option>"
			+ "<option value='12.983257,80.222294'>Dhandeeswaram</option>"
			+ "<option value='12.975301, 80.220856'>Velachery</option>"
			+ "<option value='Velachery Station-Bus Stop'>Velachery Railway Station</option>"
			+ "<option value='12.961339, 80.215116'>Domino's Pizza</option>"
			+ "<option value='12.954023, 80.212299'>Balaji Nagar</option>"
			+ "<option value='12.948848,80.210272'>Kamatchi Hospital</option>"
			+ "<option value='12.94398,80.20828'>Balaji Dental College</option>"
			+ "<option value='12.938520, 80.205232'>Vinayaga Super Market</option>"
			+ "<option value='12.936800, 80.204724'>Javid Auto Carriage</option>"

			+ " </select>";

	//Navalur to Pallikaranai
	var navalur_pallikaranai = "<select multiple id='waypoint' class='waypoints'>"
			+ "<option value='AGS Bus Stop'>AGS Bus Stop</option>"
			+ "<option value='12.861278, 80.226482'>Semmancheri</option>"
			+ "<option value='12.872825, 80.226609'>Sathyabama University</option>"
			+ "<option value='12.885194, 80.226629'>Kazhipattur</option>"
			+ "<option value='12.899865, 80.227775'>Shozhanganallur</option>"
			+ "<option value='12.901657, 80.217809'>HCL Bus Stop</option>"
			+ "<option value='12.907652, 80.198835'>Perumbakkam Bus Stop</option>"
			+ "<option value='12.916293, 80.194265'>Medavakkam Junction</option>"
			+ "<option value='12.923351, 80.197328'>Asan College</option>"
			+ "<option value='12.929169, 80.202619'>Oil Mill Bus Stop</option>"

			+ " </select>";
	
	
	//Keelkattalai to Pallikaranai
	var keelkattalai_pallikaranai = "<select multiple id='waypoint' class='waypoints'>"
			+ "<option value='12.955424, 80.186853'>Gym Supplement Shop</option>"
			+ "<option value='12.949173, 80.186246'>Chunnambu Kulathur</option>"
			+ "<option value='12.948672, 80.195520'>Vinayagapuram</option>"
			+ "<option value='12.948607, 80.200101'>Kamachi Memorial Hospital</option>"
			+ "<option value='12.941273, 80.204308'>Amma Unavagam(Narayanapuram)</option>"
			+ "<option value='12.940038, 80.205665'>More Super Market</option>"
			+ "<option value='12.937991, 80.207586'>Nectar Solutions</option>"
			+ "<option value='12.938011, 80.208693'>Golden OldAge Home</option>"
			

			+ " </select>";

	// Empty Space
	var empty = "<select multiple id='waypoint' class='waypoints'></select>";

	function wpfun() {
		$('#waypoint').multiselect({
			columns : 1,
			placeholder : 'Choose Waypoints',
			search : true,
			selectAll : true
		});
	}

	// Conditions Based on Source and destination
	if (startwp == 'Tambaram' && endwp == 'Pallikaranai') {
		document.getElementById('waypoints').innerHTML = tambaram_pallikaranai;
		//document.getElementById('waypoint').addEventListener('change',onChangeHandler);
		wpfun(); // 

	}

	else if (startwp == 'Velachery' && endwp == 'Pallikaranai') {
		document.getElementById('waypoints').innerHTML = velachery_pallikaranai;
		//document.getElementById('waypoint').addEventListener('change',onChangeHandler);
		wpfun();
	}

	else if (startwp == 'Chromepet' && endwp == 'Pallikaranai') {
		document.getElementById('waypoints').innerHTML = chromepet_pallikaranai;
		//document.getElementById('waypoint').addEventListener('change',onChangeHandler);
		wpfun();
	}

	else if (startwp == 'Alwarpet' && endwp == 'Pallikaranai') {
		document.getElementById('waypoints').innerHTML = alwarpet_pallikaranai;
		//document.getElementById('waypoint').addEventListener('change',onChangeHandler);
		wpfun();
	}

	else if (startwp == 'Navalur' && endwp == 'Pallikaranai') {
		document.getElementById('waypoints').innerHTML = navalur_pallikaranai;
		//document.getElementById('waypoint').addEventListener('change',onChangeHandler);
		wpfun();
	}
	
	else if (startwp == 'Keelkattalai' && endwp == 'Pallikaranai') {
		document.getElementById('waypoints').innerHTML = keelkattalai_pallikaranai;
		//document.getElementById('waypoint').addEventListener('change',onChangeHandler);
		wpfun();
	}

	else {
		document.getElementById('waypoints').innerHTML = empty;
		//document.getElementById('waypoint').addEventListener('change',onChangeHandler);
		wpfun();
	}

}
