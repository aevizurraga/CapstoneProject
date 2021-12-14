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
  .attr('fill', '#004483');

svg3.append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', width2 / 3)
  .attr('height', height2 / 3)
  .attr("transform", `translate(${width2 / 3}, ${height2 / 3})`)
  .attr('stroke', 'whitesmoke')
  .attr('fill', '#bc6329');

