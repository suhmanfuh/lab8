function initMap() {
  // Create center marker at UCSD
  var cicc_ltlng = {lat:32.88498, lng:-117.24134};

  // Create a map object and specify the DOM element for display.
  var map = new google.maps.Map(document.getElementById('map'), {
    center: cicc_ltlng,
    zoom: 15
  });

  var marker = new google.maps.Marker({
      position: cicc_ltlng,
      map: map,
      title: 'CICC'
  });
}
