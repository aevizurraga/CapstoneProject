let secondMap, tileLayer2;

secondMap = L.map("second-map", {
  attributionControl: false,
  scrollWheelZoom: false
});



secondMap.setView([34.01624, -7.38281], 2);

$("#glosses").html("Fishmeal is a product made from anchovies. It is primarily used for feeding farm animals and other species of fish. Peru is the leading exporter of fishmeal.  <br> <br> Click on Peru to show their top fishmeal export partners")

$.getJSON("countries.geojson", function (dat) {


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
      'rgb(43,43,43';
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

  var geojson1 = L.geoJSON(dat, {
    onEachFeature: colorlayer1,
    style: styleStart
  }).addTo(secondMap).bringToBack();

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

        geojson1.remove(secondMap);

        geojson1 = L.geoJson(dat, {
          filter: function (feature) {
            return feature.properties.VAR == "Yes"
          },
          weight: .8,
          color: 'whitesmoke',
          fillOpacity: 0,
        }).addTo(secondMap);

        line.addTo(secondMap).bringToFront().snakeIn();

        $('#glosses').html("Peru mainly exports to all parts of the world. This map visualizes their main export partners. They mainly export fishmeal to Asia, especially China and Japan, their leading importers. <br><br> Please scroll down to the next map too visualize the amounts of fishmeal each top partner imports from Peru")
      });
    }
  }
});

let btn = document.createElement("button");
btn.innerHTML = "Click Me";
$("#button").html(btn);
$("#glosses2").html("Testing")












