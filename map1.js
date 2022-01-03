const width1 = window.innerWidth * .65;
const height1 = window.innerHeight * .9;

const svg = d3.select('#map1').append('svg').attr('width', width1).attr('height', height1);

const projection = d3.geoMercator().scale(200)
  .translate([width1 / 2, height1 / 1.8]);

const path = d3.geoPath(projection);

const g = svg.append('g');

d3.json('world.geojson')
  .then(data => {

    g.selectAll('path')
      .data(data.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('stroke', "white")
      .attr("stroke-width", d => {
        if (d.properties.ADMIN == "Peru") return ".04em";
        else return ".01em";
      })
      .attr("fill", d => {
        if (d.properties.ADMIN == "Peru") return "#bc6329";
        else return "rgb(43,43,43)";
      });



  });