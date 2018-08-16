var map = L.map('mapid').setView([51.505, -0.09], 13);
var latitude;
var longitude;

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

function zoomTo() {
  for (var i = 0; i < coordinate.length; i++){
    if (document.getElementById("zip").value == coordinate[i][0]){
        latitude = coordinate[i][1];
        longitude = coordinate[i][2];
        break;
      }
    }
  lat = latitude;
  lng = longitude;
  map.panTo(new L.LatLng(lat, lng));
}
