var widthDonut = window.innerWidth * .25
heightDonut = window.innerHeight * .45

var radius = heightDonut * .2
var wrapWidth = heightDonut * .4

var svgDonut1 = d3.select("#donutChart1")
    .append("svg")
    .attr("width", widthDonut)
    .attr("height", heightDonut)
    .append("g")
    .attr("transform", "translate(" + widthDonut / 2 + "," + heightDonut * .5 + ")");;

var svgDonut2 = d3.select("#donutChart2")
    .append("svg")
    .attr("width", widthDonut)
    .attr("height", heightDonut)
    .append("g")
    .attr("transform", "translate(" + widthDonut / 2 + "," + heightDonut * .5 + ")");;

var svgDonut3 = d3.select("#donutChart3")
    .append("svg")
    .attr("width", widthDonut)
    .attr("height", heightDonut)
    .append("g")
    .attr("transform", "translate(" + widthDonut / 2 + "," + heightDonut * .5 + ")");;


var lobos = { a: 95, b: 5 }
var pelican = { a: 90, b: 10 }
var boobieComo = { a: 80, b: 20 }

// set the color scale
var colorLobos = d3.scaleOrdinal()
    .domain(lobos)
    .range(["#bc6329", "whitesmoke"])

var colorPelican = d3.scaleOrdinal()
    .domain(lobos)
    .range(["#bc6329", "whitesmoke"])

var colorBoobieComo = d3.scaleOrdinal()
    .domain(lobos)
    .range(["#bc6329", "whitesmoke"])

// Compute the position of each group on the pie:
var pie = d3.pie()
    .value(function (d) { return d.value; })

var lobos_ready = pie(d3.entries(lobos))
var pelican_ready = pie(d3.entries(pelican))
var boobieComo_ready = pie(d3.entries(boobieComo))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svgDonut1
    .selectAll('whatever')
    .data(lobos_ready)
    .enter()
    .append('path')
    .attr('d', d3.arc()
        .innerRadius(heightDonut * .4)
        .outerRadius(radius))
    .attr('fill', function (d) { return (colorLobos(d.data.key)) })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

svgDonut1.append("text")
    .text("Lobos Marinos")
    .attr("text-anchor", "middle")
    .style("fill", "whitesmoke")
    .attr("class", "donutChartFont")

svgDonut2
    .selectAll('whatever')
    .data(pelican_ready)
    .enter()
    .append('path')
    .attr('d', d3.arc()
        .innerRadius(heightDonut * .4)
        .outerRadius(radius))
    .attr('fill', function (d) { return (colorLobos(d.data.key)) })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

svgDonut2.append("text")
    .text("Pelicans")
    .attr("text-anchor", "middle")
    .style("fill", "whitesmoke")
    .attr("class", "donutChartFont")

svgDonut3
    .selectAll('whatever')
    .data(boobieComo_ready)
    .enter()
    .append('path')
    .attr('d', d3.arc()
        .innerRadius(heightDonut * .4)
        .outerRadius(radius))
    .attr('fill', function (d) { return (colorLobos(d.data.key)) })
    .attr("stroke", "black")
    .style("stroke-width", "2px")
    .style("opacity", 0.7)

svgDonut3.append("text")
    .text("Gannets")
    .attr("text-anchor", "middle")
    .style("fill", "whitesmoke")
    .attr("class", "donutChartFont")
