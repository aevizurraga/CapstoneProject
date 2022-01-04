const width2 = window.innerWidth * .60;
const height2 = window.innerHeight * .9;

var svg3 = d3.select("#circle").append("svg").attr("width", width2).attr("height", height2)

// Add the path using this helper function
svg3.append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', width2)
  .attr('height', height2)
  .attr('stroke', 'whitesmoke')
  .attr('fill', '#cc5000')
  .attr('opacity', .7);

svg3.append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', width2 / 3)
  .attr('height', height2 / 3)
  .attr("transform", `translate(${width2 / 3}, ${height2 / 3})`)
  .attr('stroke', 'whitesmoke')
  .attr('fill', '#bc6329')

svg3.append("text")
  .attr("x", "50%")
  .attr("y", (height2 / 3) / 2)
  .text("Water Needed to Transport to Factory")
  .style("font-size", "1em")
  .style("fill", "whitesmoke")
  .attr("class", "donutChartFont")
  .style("text-anchor", "middle")

svg3.append("text")
  .attr("x", "50%")
  .attr("y", (height2 / 3) * 1.5)
  .text("Anchovies")
  .style("font-size", "1em")
  .style("fill", "whitesmoke")
  .attr("class", "donutChartFont")
  .style("text-anchor", "middle")


