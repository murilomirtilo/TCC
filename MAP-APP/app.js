// default map layer




let map = L.map("map", {
  layers: MQ.mapLayer(),
  center: [-20.311145, -400.300598],
  zoom: 12,
});

function runDirection(start, end) {
  // recreating new map layer after removal
  map = L.map("map", {
    layers: MQ.mapLayer(),
    center: [-20.311145, -400.300598],
    zoom: 12,
  });

  var dir = MQ.routing.directions();

  dir.route({
    locations: [start, end],
    
  });

  CustomRouteLayer = MQ.Routing.RouteLayer.extend({
    createStartMarker: (location) => {
      var custom_icon;
      var marker;

      custom_icon = L.icon({
        iconUrl: "img/red.png",
        iconSize: [20, 29],
        iconAnchor: [10, 29],
        popupAnchor: [0, -29],
      });

      marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

      return marker;
    },

    createEndMarker: (location) => {
      var custom_icon;
      var marker;

      custom_icon = L.icon({
        iconUrl: "img/blue.png",
        iconSize: [20, 29],
        iconAnchor: [10, 29],
        popupAnchor: [0, -29],
      });

      marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);

      return marker;
    },
  });

  map.addLayer(
    new CustomRouteLayer({
      directions: dir,
      fitBounds: true,
    })
  );
  criarMarcadores();
}

// function that runs when form submitted
function submitForm(event) {
  event.preventDefault();

  // delete current map layer
  map.remove();

  // getting form data
  start = document.getElementById("start").value;
  end = document.getElementById("destination").value;

  // run directions function
  runDirection(start, end);

  // reset form
  document.getElementById("form").reset();
  


}

// asign the form to form variable
const form = document.getElementById("form");

// call the submitForm() function when submitting the form
form.addEventListener("submit", submitForm);

function criarMarcadores() {
  var custom_icon;
  var custom_icon2;
  custom_icon = L.icon({
    iconUrl: "img/icon_museum.png",
    iconSize: [29, 29],
    iconAnchor: [10, 29],
    popupAnchor: [5, -29],
  })
  L.marker([-20.430651, -40.324176], {
    icon: custom_icon,
    draggable: false
  }).bindPopup('<strong>' + 'Ponto de interesse!' + '</strong>' + '<br/>' + 'Praça do Castelo da Barra').addTo(map);


  custom_icon2 = L.icon({
    iconUrl: "img/icon_restaurant.png",
    iconSize: [29, 29],
    iconAnchor: [10, 29],
    popupAnchor: [5, -29],
  })
  L.marker([-20.478640, -40.352865], {
    icon: custom_icon2,
    draggable: false
  }).bindPopup('<strong>' + 'Ponto de interesse!' + '</strong>' + '<br/>' + 'Restaurante Doceminas').addTo(map);

}





