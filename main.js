document.addEventListener("DOMContentLoaded", function () {
	getLocation();
});


function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(reportPosition, gpsError);
	} else {
		alert("This browser does not support Geolocation.");
	}
}

function reportPosition(position) {
	console.dir(position);
	showMap(position);
}

//function watchPosition(position) {
//	console.log(position.coords.latitude);
//	console.log(position.coords.longitude);
//	console.log(position.coords.accuracy);
//	console.log(position.coords.altitude);
//}

function showMap(position) {
	var key = "AIzaSyB9aqmgu_MBEd65SO1kbk2-Zgx7kO4o8R4";
	var latPlusLon = position.coords.latitude + "," + position.coords.longitude;
	var mapImg = document.createElement("img");
	mapImg.src = "https://maps.googleapis.com/maps/api/staticmap?center=" + latPlusLon + "&zoom=14&size=400x400&maptype=roadmap&markers=color:red%7C" + latPlusLon + "&key=" + key;
	console.log(mapImg);
	var canvas = document.createElement("canvas");
	document.querySelector("body").appendChild(canvas);
	canvas.id = "mapholder";
	canvas.height = 400;
	canvas.width = 400;

	var mapholder = document.querySelector("#mapholder");
	var context = mapholder.getContext("2d");

	mapImg.onload = function () {
		context.drawImage(mapImg, 0, 0);
	}
}

function gpsError(error) {
	alert("ERROR!!!");
}
