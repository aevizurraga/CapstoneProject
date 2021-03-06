widthC = window.outerWidth * .5

const svg1 = d3.select('#map2').append('svg').attr('width', widthC).attr('height', height1);

d3.json('peruDistrital.geojson')
  .then(data => {

    const g1 = svg1.append('g');

    const projection1 = d3.geoMercator().center([-75.5, -9]).scale(1800).translate([widthC / 2, height1 / 2]);

    const path1 = d3.geoPath(projection1);

    g1.selectAll('path')
      .data(data.features)
      .enter()
      .append('path')
      .attr('d', path1)
      .attr('stroke', "white")
      .attr("stroke-width", d => {
        if (d.properties.NOMBDIST == "CHIMBOTE") return ".04em";
        else return ".01em";
      })
      .attr("fill", d => {
        if (d.properties.NOMBDIST == "CHIMBOTE") return "#bc6329";
        else return "rgb(38,38,38)";
      });



  });