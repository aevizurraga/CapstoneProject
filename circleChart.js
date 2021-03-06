const
    width3 = (innerWidth * .99),
    height3 = ((innerHeight * .85) / 2);

var svg3 = d3
    .select("#circle1")
    .append("svg")
    .attr("width", width3)
    .attr("height", height3)

d3.csv("fishMeal.csv").then(data => {
    console.log(data);

    var colorbarchart2 = d3.scaleSequential(d3.interpolateBlues)
        .domain(
            [d3.min(data, function (d) { return +d.negativeGrowth; }),
            d3.max(data, function (d) { return +d.negativeGrowth; })])

    var xscale2 = d3
        .scaleLinear()
        .domain([1964, 2020])
        .range([width3 * .05, width3 * .95]);

    var yscale2 = d3
        .scaleLinear()
        .domain([4, -4])
        .range([height3 * .1, height3 * .9]);

    var xaxis2 = svg3
        .append("g")
        .call(d3.axisBottom(xscale2).tickValues(["1964", "1972", "1982", "1997", "2020"])
            .tickFormat(d3.format("d")))
        .attr("transform", `translate(0, ${height3 * .5})`)
        .style("color", "whitesmoke")
        .style("font-size", ".6vw")

    var yaxis2 = svg3
        .append("g")
        .call(d3.axisLeft(yscale2))
        .style("color", "rgb(43, 43, 43")
        .style("font-size", ".6vw")

    var tool = d3.select("body").append("div").attr("class", "toolTip");

    svg3
        .append("text")
        .attr("dy", height3 * .7)
        .attr("x", "50%")
        .attr("class", "yAxisLabel")
        .style("fill", "whitesmoke")
        .style("font-size", ".8vw")
        .style("text-anchor", "middle")
        .text("Year")

    var circle1 = svg3.selectAll("circle1")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", function (d) { return xscale2(d.Year); })
        .attr("cy", function (d) { return yscale2(0); })
        .attr("r", (d => d.negativeGrowth))
        .style("fill", function (d) {
            if (d.value == "positive") {
                return "dodgerblue"
            };
            return "darkorange";
        })
        .style("opacity", function (d) {
            if (d.value == "positive") {
                return 0
            };
            return .3;
        })
        .on("mousemove", function (d) {
            tool.style("left", d3.event.pageX + 10 + "px")
            tool.style("top", d3.event.pageY - 20 + "px")
            tool.style("display", "inline-block");
            tool.html("Year: " + d.Year + "<br>" + "Exports decreased by " + d.negativeGrowth + "%");
        }).on("mouseout", function (d) {
            tool.style("display", "none");
        });;
})


