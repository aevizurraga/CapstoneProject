let height4 = window.innerHeight * .5;

d3.csv("incomeFishmeal.csv").then(data => {
    console.log(data);

    svg6 = d3
        .select("#incomeLineChart")
        .append("svg")
        .attr("width", width2)
        .attr("height", height4)

    let x = d3.scaleBand()
        .domain(data.map(function (d) { return d.Year; }))
        .range([width2 * .1, (width2 - (width2 * .1))]);
    svg6.append("g")
        .attr("transform", `translate(0,${height4 - (height4 * .1)})`)
        .call(d3.axisBottom(x));

    // Add Y axis
    let y = d3.scaleLinear()
        .domain([0, 1800])
        .range([height4 - (height4 * .1), height4 * .2]);
    svg6.append("g")
        .attr("transform", `translate(${width2 * .1})`)
        .call(d3.axisLeft(y));

    // Add the area

    var line = d3.line()
        .x(function (d) { return x(d.Year) })
        .y(function (d) { return y(d.Ancash) })
        .curve(d3.curveMonotoneX)

    svg6.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line)
        .attr("transform", `translate(${width2 * .025})`)
        .style("fill", "none")
        .style("stroke", "#bc6329")
        .style("stroke-width", "2");

    var line2 = d3.line()
        .x(function (d) { return x(d.Year) })
        .y(function (d) { return y(d.Peru) })
        .curve(d3.curveMonotoneX)

    svg6.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line2)
        .attr("transform", `translate(${width2 * .025})`)
        .style("fill", "none")
        .style("stroke", "red")
        .style("stroke-width", "2");

    var line3 = d3.line()
        .x(function (d) { return x(d.Year) })
        .y(function (d) { return y(d.Fishmeal) })
        .curve(d3.curveMonotoneX)

    svg6.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line3)
        .attr("transform", `translate(${width2 * .025})`)
        .style("fill", "none")
        .style("stroke", "whitesmoke")
        .style("stroke-width", "2");

    svg6.append("text")
        .attr("x", (width7 * .1))
        .attr("y", height4 * .04)
        .text("Firshmeal Exports and Income")
        .style("font-size", "1em")
        .style("fill", "whitesmoke")
        .attr("class", "donutChartFont")

    svg6.append("text")
        .attr("x", (width2 - (width2 * .3)))
        .attr("y", height4 * .65)
        .text("Average Monthly Income - Ancash (in Soles)")
        .style("font-size", ".7em")
        .style("fill", "whitesmoke")
        .attr("class", "donutChartFont")
        .attr("alignment-baseline", "middle")

    svg6.append("text")
        .attr("x", (width2 - (width2 * .3)))
        .attr("y", height4 * .7)
        .text("Average Monthly Income - Peru (in Soles)")
        .style("font-size", ".7em")
        .style("fill", "whitesmoke")
        .attr("class", "donutChartFont")
        .attr("alignment-baseline", "middle")

    svg6.append("text")
        .attr("x", (width2 - (width2 * .3)))
        .attr("y", height4 * .6)
        .text("Fishmeal Exported (in thousands)")
        .style("font-size", ".7em")
        .style("fill", "whitesmoke")
        .attr("class", "donutChartFont")
        .attr("alignment-baseline", "middle")

    svg6.append("text")
        .attr("x", (width2 - (width2 * .3)))
        .attr("y", height4 * .75)
        .text("1 Sol equals .25 cents")
        .style("font-size", ".7em")
        .style("fill", "whitesmoke")
        .attr("class", "donutChartFont")
        .attr("alignment-baseline", "middle")

    svg6.append("text")
        .attr("x", (width2 - (width2 * .32)))
        .attr("y", height4 * .75)
        .text("*")
        .style("font-size", ".8em")
        .style("fill", "whitesmoke")
        .attr("class", "donutChartFont")
        .attr("alignment-baseline", "middle")

    svg6.append("circle")
        .attr("cx", (width2 - (width2 * .32)))
        .attr("cy", height4 * .65)
        .attr("r", 6)
        .style("fill", "#bc6329")

    svg6.append("circle")
        .attr("cx", (width2 - (width2 * .32)))
        .attr("cy", height4 * .7)
        .attr("r", 6)
        .style("fill", "red")

    svg6.append("circle")
        .attr("cx", (width2 - (width2 * .32)))
        .attr("cy", height4 * .6)
        .attr("r", 6)
        .style("fill", "whitesmoke")

    svg6
        .append("text")
        .attr("dy", height4)
        .attr("x", "50%")
        .attr("class", "yAxisLabel")
        .style("fill", "whitesmoke")
        .style("font-size", ".8vw")
        .style("text-anchor", "middle")
        .text("Year")

})

