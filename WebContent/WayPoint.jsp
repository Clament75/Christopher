<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="initial-scale=1.0, user-scalable=no">
<meta charset="utf-8">
<title>Waypoints in directions</title>

<link rel="stylesheet" type="text/css"
	href="assets/css/waypointstyle.css" />
<link rel="stylesheet" type="text/css"
	href="assets/css/jquery.multiselect.css" />

</head>
<!-- Script for waypoints selection based on routes -->

<script src="assets/js/waypointscript.js"></script>

<!-- Jquery For Multi-selection waypoints  -->
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/jquery.multiselect.js"></script>

<body>






	<div id="map"></div>
	<div id="right-panel">
		<div class="font-style">
			<h2 align="center">Route Management</h2>
			<b>Destination / Institute (or) School</b> <select id="end"
				class="form-control" onchange="wayPointsLoad()">
				<option>--Select</option>
				<option value="Pallikaranai">Pallikaranai</option>


			</select><br> <br> <b>Source / Starting point</b> <select id="start"
				class="form-control" onchange="wayPointsLoad()">

				<option>--Select</option>
				<option value="Tambaram">Tambaram</option>
				<option value="Velachery">Velachery</option>
				<option value="Chromepet">Chromepet</option>
				<option value="Alwarpet">Alwarpet</option>
				<option value="Navalur">Navalur</option>
				<option value="Keelkattalai">Keelkattalai</option>


			</select><br>
			<div>
				<form  role="form"  action="WayPoint" method="post">
					<input type="button" value="Click to show Waypoints" class="form-control">
			</form>
			</div>
			
		
		<br> <br> <b>Waypoints:</b><br>

		<div id='waypoints'>
			<select id='waypoint' class="form-control">

			</select>
			

		</div>

</div>
		<div id="directions-panel" class="font-style"></div>
	</div>

	<script async defer
		src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDwoEmCllYbtI7sZzpLfq4WVXWSvnC-7X8&callback=initMap">
		
	</script>

</body>
</html>