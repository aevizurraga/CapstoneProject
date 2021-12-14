let height7 = window.innerHeight * .4;
let width7 = window.innerWidth * .45

d3.csv("dhc_ihc.csv").then(function (data) {

    svg7 = d3
        .select("#stackedBarChart")
        .append("svg")
        .attr("width", width7)
        .attr("height", height7)

    const subgroups = data.columns.slice(1);

    const groups = data.map(d => (d.Year))

    var x = d3.scaleBand()
        .domain(groups)
        .range([width7 * .1, (width7 - (width7 * .1))])
        .padding([0.5])
    svg7.append("g")
        .attr("transform", `translate(0,${height7 - (height7 * .1)})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));

    var y = d3.scaleLinear()
        .domain([0, 1])
        .range([height7 - (height7 * .1), height7 * .1]);
    svg7.append("g")
        .attr("transform", `translate(${width7 * .1})`)
        .call(d3.axisLeft(y));

    const color = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['#bc6329', 'white'])

    const opacity = d3.scaleOrdinal()
        .domain(subgroups)
        .range(['.5', '1'])

    const stackedData = d3.stack()
        .keys(subgroups)
        (data);

    svg7.append("g")
        .selectAll("g")
        .data(stackedData)
        .join("g")
        .attr("fill", d => color(d.key))
        .attr("opacity", d => opacity(d.key))
        .selectAll("rect")
        .data(d => d)
        .join("rect")
        .attr("x", d => x(d.data.Year))
        .attr("y", d => y(d[1]))
        .attr("height", d => y(d[0]) - y(d[1]))
        .attr("width", x.bandwidth())

})

d3.csv("malnourishmentPeruNorway.csv").then(data => {
    console.log(data);

    svg8 = d3
        .select("#incomeMalLineChart")
        .append("svg")
        .attr("width", width7)
        .attr("height", height7)

    let x = d3.scaleBand()
        .domain(data.map(function (d) { return d.Year; }))
        .range([width7 * .1, (width7 - (width7 * .1))]);
    svg8.append("g")
        .attr("transform", `translate(0,${height7 - (height7 * .1)})`)
        .call(d3.axisBottom(x));

    // Add Y axis
    let y = d3.scaleLinear()
        .domain([0, 18])
        .range([height7 - (height7 * .1), height7 * .1]);
    svg8.append("g")
        .attr("transform", `translate(${width7 * .1})`)
        .call(d3.axisLeft(y));

    var line1 = d3.line()
        .x(function (d) { return x(d.Year) })
        .y(function (d) { return y(d.Fishmeal) })
        .curve(d3.curveMonotoneX)

    svg8.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line1)
        .attr("transform", `translate(${width7 * .025})`)
        .style("fill", "none")
        .style("stroke", "whitesmoke")
        .style("stroke-width", "2");

    var line2 = d3.line()
        .x(function (d) { return x(d.Year) })
        .y(function (d) { return y(d.Malnourishment) })
        .curve(d3.curveMonotoneX)

    svg8.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line2)
        .attr("transform", `translate(${width7 * .025})`)
        .style("fill", "none")
        .style("stroke", "#bc6329")
        .style("stroke-width", "2");

    var line3 = d3.line()
        .x(function (d) { return x(d.Year) })
        .y(function (d) { return y(d.Norway) })
        .curve(d3.curveMonotoneX)

    svg8.append("path")
        .datum(data)
        .attr("class", "line")
        .attr("d", line3)
        .attr("transform", `translate(${width7 * .025})`)
        .style("fill", "none")
        .style("stroke", "red")
        .style("stroke-width", "2");

    svg8.append("circle")
        .attr("cx", (width7 - (width7 * .4)))
        .attr("cy", height7 * .12)
        .attr("r", 6)
        .style("fill", "#bc6329")

    svg8.append("circle")
        .attr("cx", (width7 - (width7 * .4)))
        .attr("cy", height7 * .2)
        .attr("r", 6)
        .style("fill", "red")

    svg8.append("circle")
        .attr("cx", (width7 - (width7 * .4)))
        .attr("cy", height7 * .04)
        .attr("r", 6)
        .style("fill", "whitesmoke")

    svg8.append("text")
        .attr("x", (width7 - (width7 * .36)))
        .attr("y", height7 * .12)
        .text("Undernourished Population (%) - Peru")
        .style("font-size", ".7em")
        .style("fill", "whitesmoke")
        .attr("alignment-baseline", "middle")

    svg8.append("text")
        .attr("x", (width7 - (width7 * .36)))
        .attr("y", height7 * .2)
        .text("Undernourished Population (%) - Norway")
        .style("font-size", ".7em")
        .style("fill", "whitesmoke")
        .attr("alignment-baseline", "middle")

    svg8.append("text")
        .attr("x", (width7 - (width7 * .36)))
        .attr("y", height7 * .04)
        .text("Fishmeal Exports (in hundreds)")
        .style("font-size", ".7em")
        .style("fill", "whitesmoke")
        .attr("alignment-baseline", "middle")






})