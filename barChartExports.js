const width8 = (innerWidth * .4),
    height8 = (innerHeight * .6);

var svg9 = d3
    .select("#bar-1")
    .append("svg")
    .attr("width", width8)
    .attr("height", height8)

d3.csv("fishMeal.csv").then(data => {
    console.log(data);

    var colorbarchart1 = d3.scaleSequential(d3.interpolateOranges)
        .domain(
            [d3.min(data, function (d) { return +d.Exports; }),
            d3.max(data, function (d) { return +d.Exports; })])

    var xscale1 = d3
        .scaleBand()
        .domain(data.map(function (d) { return d.Year; }))
        .range([width8 * .1, width8 * .90])
        .padding(.7);

    var yscale1 = d3
        .scaleLinear()
        .domain([2500, 0])
        .range([0, height8 * .8]);

    var tool = d3.select("body").append("div").attr("class", "toolTip");

    var rect1 = svg9.selectAll("rect1")
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function (d) { return xscale1(d.Year) })
        .attr("y", function (d) { return yscale1(d.Exports) })
        .attr("height", function (d, i) { return (height8 * .8) - yscale1(d.Exports); })
        .attr("width", "8")
        .style("fill", function (d) { return colorbarchart1(+d.Exports); })
        .style("stroke", "white")
        .style("stroke-width", ".01em")
        .on("mousemove", function (d) {
            tool.style("left", d3.event.pageX + 10 + "px")
            tool.style("top", d3.event.pageY - 20 + "px")
            tool.style("display", "inline-block");
            tool.html("Year: " + d.Year + "<br>" + "Export: " + d.Exports + ",000 Metric Tons of Fishmeal ");
        }).on("mouseout", function (d) {
            tool.style("display", "none");
        });

    var xaxis1 = svg9
        .append("g")
        .call(d3.axisBottom(xscale1).tickValues(["1965", "1970", "1975", "1980", "1985", "1990", "1995", "2000", "2005", "2010", "2015", "2020"]))
        .attr("transform", `translate(0, ${height8 * .8})`)
        .style("color", "whitesmoke")
        .style("font-size", ".6vw")

    var yaxis1 = svg9
        .append("g")
        .call(d3.axisLeft(yscale1))
        .attr("transform", `translate(${width8 * .1})`)
        .style("color", "whitesmoke")
        .style("font-size", ".6vw")

    svg9
        .append("text")
        .attr("y", (height8 * .8) / 2)
        .attr("dx", "1em")
        .attr("class", "yAxisLabel")
        .style("fill", "whitesmoke")
        .style("font-size", ".7vw")
        .attr("writing-mode", "vertical-lr")
        .style("text-anchor", "middle")
        .text("Fishmeal Exported (Per 1000 Metric Tons)")

    svg9
        .append("text")
        .attr("dy", height8 * .9)
        .attr("x", "50%")
        .attr("class", "yAxisLabel")
        .style("fill", "whitesmoke")
        .style("font-size", ".7vw")
        .style("text-anchor", "middle")
        .text("Year")







})


