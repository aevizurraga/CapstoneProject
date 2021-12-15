let secondMap, tileLayer2;

secondMap = L.map("second-map", {
  attributionControl: false,
  scrollWheelZoom: false
});

tileLayer2 =
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 18,
  });

tileLayer2.addTo(secondMap);



secondMap.setView([38.01624, -3.38281], 2);

$("#glosses").html("Fishmeal is a product made from anchovies. It is primarily used for feeding farm animals and other species of fish. Peru is the leading exporter of fishmeal.  <br> <br> Click on Peru to show their top fishmeal export partners")


$.getJSON("merged_1.geojson", function (data) {

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

  var line;

  line = L.polyline(exports, {
    color: '#fc9272',
    weight: 2,
    smoothfactor: 0,
    snakingSpeed: 700,
    opacity: .8
  })

  let btn = document.createElement("button");
  btn.innerHTML = "Click Here to Begin";
  $("#button").html(btn);
  $("#info").html("The negative impact of the fishmeal industry is not only felt in Peru or Chimbote. As shown in the map to the left, Peru exports fishmeal to all parts of the world. The map displays the top fishmeal partners of Peru. The top trading partners of Peru are located in Asia. Their partners include Japan, Thailand, the Phillipines, and Malaysia. However, their top trading partner is China. In 2021, it is estimated that Peru will export about 780,000 metric tons of fishmeal to China. China is the worlds largest importer of fishmeal. This is mostly due to their increased production of certain species of fish such as carp and tilapia, consumers of fishmeal.");
  $("#glosses2").html("");

  function getColor(d) {
    return d > 780770 ? '#67000d' :
      d > 20000 ? '#a50f15' :
        d > 10000 ? '#cb181d' :
          d > 5000 ? '#ef3b2c' :
            d > 2000 ? '#fb6a4a' :
              d > 0 ? '#fc9272' :
                'black';
  };



  btn.addEventListener('click', function onClick(e) {

    line.addTo(secondMap).bringToFront().snakeIn();

    let geojson2;

    $(this).addClass('no-hover');

    btn.innerHTML = ""

    geojson2 = L.geoJSON(data, {
      onEachFeature: colorlayer,
      style: style0
    }).addTo(secondMap).bringToBack();
  })

  function style(feature) {
    return {
      fillColor: getColor(feature.properties.export),
      weight: .5,
      opacity: 1,
      color: 'whitesmoke',
      fillOpacity: 1
    };
  };

  function style0(feature) {
    return {
      fillColor: getColor(feature.properties.export),
      weight: .5,
      opacity: 1,
      color: 'black',
      fillOpacity: 1
    };
  };

  function colorlayer(feature, layer) {

    let pop = `${feature.properties.ADMIN} imported ${Number(feature.properties.export)} metric tons of fishmeal imported from Peru.`;

    layer.on('click', function zoomToFeature(e) {
      secondMap.fitBounds(layer.getBounds());
    })
    layer.on('mouseover', function (e) {
      $("#glosses2").html(`${pop}`)
      layer.setStyle({
        fillColor: 'whitesmoke',
        weight: 1,
        opacity: 1,
        color: 'whitesmoke',
        fillOpacity: 1
      });
    })
    layer.on('mouseout', function (e) {
      $("#glosses2").html("")
      this.closePopup();
      layer.setStyle({
        fillColor: getColor(feature.properties.export),
        weight: .5,
        opacity: 1,
        color: 'black',
        fillOpacity: 1
      });
    });
  }

});












