$(document).ready(function() {
	$.getJSON('topspot.json', function(topspots) {
		$.each(topspots, function(index, topspot) { 
			$("#topSpots tbody").append('<tr><td>' + topspot.name + '</td><td>' + topspot.description + '</td><td><a class="btn btn-primary" href="google.com/maps?q=' + topspot.location + '">Click to open in Google Maps</a></td></tr>');
		});
	});
});