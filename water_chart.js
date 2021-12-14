var svg5 = d3.select("#water_chart")
      .append("svg")
      .attr("width", width2)
      .attr("height", height2)

let xAxis;
let yAxis;
let y;
let x;

d3.csv("waterUseData.csv",

      // When reading the csv, I must format variables:
).then(

      // Now I can use this dataset:       
      function (data) {

            // Add X axis --> it is a date format
            let x = d3.scaleBand()
                  .domain([2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017])
                  .range([width2 * .1, (width2 - (width2 * .1))]);
            svg5.append("g")
                  .attr("transform", `translate(0,${height2 - (height2 * .1)})`)
                  .call(d3.axisBottom(x));

            // Add Y axis
            let y = d3.scaleLinear()
                  .domain([0, 19000000])
                  .range([height2 - (height2 * .1), height2 * .1]);
            svg5.append("g")
                  .attr("transform", `translate(${width2 * .1})`)
                  .call(d3.axisLeft(y));

            // Add the area
            svg5.append("path")
                  .datum(data)
                  .attr("fill", "#cce5df")
                  .attr("stroke", "#69b3a2")
                  .attr("stroke-width", 1.5)
                  .attr("d", d3.area()
                        .x(d => x(d.Year))
                        .y0(y(0))
                        .y1(d => y(d.waterUsedMin))
                  )

      })

/*d3.csv("waterUseData.csv").then(data => {

      console.log(data);

      x = d3.scaleBand()
            .range([width2 * .1, (width2 - (width2 * .1))])
            .padding(0.5);

      xAxis = svg5
            .append("g")
            .attr("transform", `translate(0,${height2 - (height2 * .1)})`)
            .style("color", "whitesmoke")
            .style("font-size", ".6vw")

      y = d3.scaleLinear()
            .range([height2 - (height2 * .1), height2 * .1]);

      yAxis = svg5
            .append("g")
            .attr("class", "myYaxis")
            .attr("transform", `translate(${width2 * .1})`)
            .style("color", "whitesmoke")
            .style("font-size", ".6vw")

            ;
      x.domain(d3.extent(data, function (d) { return d.Year; }))

      xAxis.call(d3.axisBottom(x))

      y.domain([0, 7000000])

      yAxis.call(d3.axisLeft(y));


      svg5.append("path")
            .datum(data)
            .attr("fill", "#cce5df")
            .attr("stroke", "#69b3a2")
            .attr("stroke-width", 1.5)
            .attr("d", d3.area()
                  .x(d => x(d.Year))
                  .y0(y(0))
                  .y1(d => y(d.waterUsedMin))
            )

})

*/




