let secondMap, tileLayer2;

secondMap = L.map("second-map", {
    attributionControl: false,
    scrollWheelZoom: false,
    zoomControl: false
});

tileLayer2 = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 18,
    noWrap: true,
});

tileLayer2.addTo(secondMap);

secondMap.setView([38.01624, -3.38281], 2);

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

    L.easyButton('<i class="material-icons">travel_explore</i>', function () {
        secondMap.setView([34.01624, -7.38281], 2);
    }).addTo(secondMap);

    line = L.polyline(exports, {
        color: '#fc9272',
        weight: 2,
        smoothfactor: 0,
        snakingSpeed: 700,
        opacity: .8
    })

    $("#glosses2").html("");

    function getColor(d) {
        return d > 780770 ? '#532c12' :
            d > 20000 ? '#7d421b' :
                d > 5000 ? '#bc6329' :
                    d > 0 ? '#f4a261' :
                        'black';
    };

    var legend = L.control({ position: 'bottomleft' });

    legend.onAdd = function (map) {

        var div = L.DomUtil.create('div', 'info legend'),
            grades = [0, 5000, 20000, 780770],
            labels = [];

        // loop through our density intervals and generate a label with a colored square for each interval
        for (var i = 0; i < grades.length; i++) {
            div.innerHTML +=
                '<i style="background:' + getColor(grades[i] + 1) + '"></i> ' +
                grades[i] + (grades[i + 1] ? '&ndash;' + grades[i + 1] + '<br>' : '+');
        }
        return div;
    };

    legend.addTo(secondMap);

    let geojson2;

    $("#info2").html("The main importer of fishmeal from Peru, in terms of quantity, is China. In 2021, it is estimated they will import a total of 780,779 metric tons of fishmeal. Overall, China is the main importer of fishmeal in the world. For the year 2020, China imported about 1.5 million metric of fishmeal.[5] This is due to the large quantities of fish that are raised to be sold, such as carp and tilapia. <br><br> Please hover over each highlighted country to see how much  fishmeal they imported from Peru. You can click on any highlighted country to zoom in. You may click on the button on the upper left of the map to zoom out.")

    geojson2 = L.geoJSON(data, {
        onEachFeature: colorlayer,
        style: style0
    }).addTo(secondMap).bringToBack();

    function style0(feature) {
        return {
            fillColor: getColor(feature.properties.exports),
            weight: .5,
            opacity: 1,
            color: 'black',
            fillOpacity: 1
        };
    };

    function colorlayer(feature, layer) {

        if (feature.properties.ADMIN != 'Peru' && feature.properties.exports > 0) {

            let pop = `${feature.properties.ADMIN} imported ${Number(feature.properties.exports)} metric tons of fishmeal imported from Peru.`;

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
                    fillColor: getColor(feature.properties.exports),
                    weight: .5,
                    opacity: 1,
                    color: 'black',
                    fillOpacity: 1
                });
            });
        }

    }

});