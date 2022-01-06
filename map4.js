let firstMap, tileLayer1;

firstMap = L.map("first-map", {
  attributionControl: false,
  scrollWheelZoom: false,
  zoomControl: false
});

tileLayer1 = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 18,
  noWrap: true,
});

tileLayer1.addTo(firstMap);

firstMap.setView([38.01624, -3.38281], 2);

$("#info").html("As the leading exporter of fishmeal, many nations obtain their fishmeal from Peru. <br> <br> Click on Peru to show their top fishmeal export partners")

L.easyButton('<i class="material-icons">travel_explore</i>', function () {
  firstMap.setView([38.01624, -3.38281], 2);
}).addTo(firstMap);

$.getJSON("world.geojson", function (data) {

  var exports = [[[-9.189967, -75.015152], [-25.274398, 133.775136]],
  [[-9.189967, -75.015152], [42.733883, 25.48583]],
  [[-9.189967, -75.015152], [56.130366, -106.346771]],
  [[-9.189967, -75.015152], [35.86166, 104.195397]],
  [[-9.189967, -75.015152], [4.570868, -74.297333]],
  [[-9.189967, -75.015152], [21.521757, -77.781167]],
  [[-9.189967, -75.015152], [51.165691, 10.451526]],
  [[-9.189967, -75.015152], [40.463667, -3.74922]],
  [[-9.189967, -75.015152], [46.227638, 2.213749]],
  [[-9.189967, -75.015152], [39.074208, 21.824312]],
  [[-9.189967, -75.015152], [15.783471, -90.230759]],
  [[-9.189967, -75.015152], [22.396428, 114.109497]],
  [[-9.189967, -75.015152], [-0.789275, 113.921327]],
  [[-9.189967, -75.015152], [20.593684, 78.96288]],
  [[-9.189967, -75.015152], [36.204824, 138.252924]],
  [[-9.189967, -75.015152], [35.907757, 127.766922]],
  [[-9.189967, -75.015152], [4.210484, 101.975766]],
  [[-9.189967, -75.015152], [-9.189967, -75.015152]],
  [[-9.189967, -75.015152], [12.879721, 121.774017]],
  [[-9.189967, -75.015152], [15.870032, 100.992541]],
  [[-9.189967, -75.015152], [38.963745, 35.243322]],
  [[-9.189967, -75.015152], [23.69781, 120.960515]],
  [[-9.189967, -75.015152], [39.09596, -84.81445]],
  [[-9.189967, -75.015152], [6.42375, -66.58973]]]

  function getColorStart(d) {
    return d == "Peru" ? '#bc6329' :
      'black';
  };

  function styleStart(feature) {
    return {
      fillColor: getColorStart(feature.properties.ADMIN),
      weight: .5,
      opacity: 1,
      color: 'whitesmoke',
      fillOpacity: 1
    };
  }

  var geojson1 = L.geoJSON(data, {
    onEachFeature: colorlayer1,
    style: styleStart
  }).addTo(firstMap).bringToBack();

  function colorlayer1(feature, layer) {
    layer.bindPopup(feature.properties.ADMIN);

    var line;

    line = L.polyline(exports, {
      color: '#bc6329',
      weight: 2,
      smoothfactor: 0,
      snakingSpeed: 700,
      opacity: .8
    })

    if (feature.properties.ADMIN == 'Peru') {

      layer.on('click', function (e) {

        this.openPopup;

        geojson1.remove(firstMap);

        geojson1 = L.geoJson(data, {
          onEachFeature: colorlayer1,
          filter: function (feature) {
            return feature.properties.VAR == "Yes"
          },
          weight: .8,
          color: 'whitesmoke',
          fillOpacity: .3,
        }).addTo(firstMap);

        line.addTo(firstMap).bringToFront().snakeIn();

        $('#info').html("Peru mainly exports to all parts of the world. This map visualizes their main export partners. They mainly export fishmeal to Asia, especially China and Japan, their leading importers. <br><br> You may double-click on the map to zoom in. Click on the button on the top left side of the map to zoom out. <br><br> Please scroll down to the next map to visualize the amounts of fishmeal each top partner imports from Peru.")
      });
    }
  }
});












