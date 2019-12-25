/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

const paddingInner = 0.3, paddingOuter = 0.4

const margin = { top: 20, right: 10, bottom: 100, left: 100}
let width = 600 - margin.left - margin.right, 
      height = 400 - margin.top - margin.bottom

const g = d3.select("#chart-area").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")") // appends group to canvas, shifts it

g.append("text")
    .attr("class", "x axis-label")
    .attr("x", width / 2)
    .attr("y", height + 50)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .text("Star Break revenue 2019")

g.append("text")
    .attr("class", "y axis-label")
    .attr("x", - (height / 2) )
    .attr("y", - 60)
    .attr("font-size", "20px")
    .attr("text-anchor", "middle")
    .attr("transform", "rotate(-90)") // this makes the title run vertically down the y axis
    .text("Revenue - $")


d3.json("data/revenues.json").then(function(data){
    data.forEach(function(d){
        d.revenue = +d.revenue
        d.profit = +d.profit
    })
    const x = d3.scaleBand()
        .domain(data.map(function(d){
            return d.month
        }))
        .range([0, width])
        .paddingInner(paddingInner)
        .paddingOuter(paddingOuter)

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d){
            return d.revenue
        })])
        .range([height, 0])

    const xAxisCall = d3.axisBottom(x)
    g.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxisCall)
        // .selectAll("text")
        //     .attr("y", "10")
        //     .attr("x", "-5")
        //     .attr("text-anchor", "end")
        //     .attr("transform", "rotate(-40)")
   
    const yAxisCall = d3.axisLeft(y)
        // only use this if you want a measurement after the integer
        // .tickFormat(function(d){
        //     return d + "m"
        // })
    g.append("g")
        .attr("class", "y-axis")
        .call(yAxisCall)
        
    const rects = g.selectAll("rect")
        .data(data)

    rects.enter()
        .append("rect")
            .attr("y", function(d){return y(d.revenue)})
            .attr("x", function(d){return x(d.month)})
            .attr("width", x.bandwidth)
            .attr("height", function(d){return height - y(d.revenue)})
            .attr("fill", "grey");
})