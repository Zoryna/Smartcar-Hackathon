function showMap(){
  var div = document.getElementById("map_canvas");

  // Create a Google Maps native view under the map_canvas div.
  var map = plugin.google.maps.Map.getMap(div);
  map.one(plugin.google.maps.event.MAP_READY, function() {
  console.log("--> map_canvas : ready.");
  });
  // If you click the button, do something...
  var button = document.getElementById("button");
  //var geocoder = new plugin.google.maps.Geocoder();
  var address = document.getElementById("address").value;
  //var address = "1474 N. Milwaukee Ave, Chicago IL 60622";

  //var addressLocation = plugin.google.maps.Geocoder.geocode({"address": address});
  plugin.google.maps.Geocoder.geocode({
  "address": address
}, function(results) {
    // Add a marker
    var marker = map.addMarker({
      'position': results[0].position,
      'title':  address
    });

    // Move to the position
    map.moveCamera({
      'target': results[0].position,
      'zoom': 17,
      'tilt': 30
    }, function() {
      marker.showInfoWindow();
    });
});
}

window.onload = showMap;
