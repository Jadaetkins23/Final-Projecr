var map = L.map('mapid').setView([40.7128, -74], 13);
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
  map.setView(new L.LatLng(lat, lng));
  L.layerGroup.wikipediaLayer({ target: '_blank', popupOnMouseover: true, limit: 50, }).addTo(map);
}
