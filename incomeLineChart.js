let height4 = window.innerHeight * .7;

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
        .range([height4 - (height4 * .1), height4 * .1]);
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
        .style("stroke", "whitesmoke")
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
        .style("stroke", "#bc6329")
        .style("stroke-width", "2");
})