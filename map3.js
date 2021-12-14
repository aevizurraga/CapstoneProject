

const svg2 = d3.select('#map3').append('svg').attr('width', width1).attr('height', height1).attr("fill", "red");

const projection2 = d3.geoMercator().scale(200)
                      .translate([width1/2, height1/1.8]);

const path2 = d3.geoPath(projection2);

const g2 = svg2.append('g');

d3.json('countries_fishmeal.geojson')
  .then(data => {

      g2.selectAll('path')
       .data(data.features)
       .enter()
       .append('path')
       .attr('d', path2)
       .attr('stroke', "white")
       .attr('stroke-width', ".025em")
       .attr("fill", "rgb(43,43,43)");

       svg2.selectAll(".dots")
         .data(data.features)
         .enter()
         .append("circle")
         .attr("r", (d => (d.properties.Fishmeal * .1)))
         .attr("fill", "#bc6329")
         .attr("opacity", ".4")
         .attr("transform",function(d){                 
          var p = projection2(d3.geoCentroid(d));
          return "translate("+p+")";
        });

    });