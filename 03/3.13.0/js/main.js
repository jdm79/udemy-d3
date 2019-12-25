/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

const margin = { top: 20, right: 10, bottom: 100, left: 100}
const width = 600 - margin.left - margin.right, 
      height = 400 -margin.top - margin.bottom

const g = d3.select("#chart-area").append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")")


d3.json("data/revenues.json").then(function(data){
    data.forEach(function(d){
        d.revenue = +d.revenue
        d.profit = +d.profit
    })
    const x = d3.scaleBand()
        .domain(data.map(function(d){
            return d.month
        }))
        .range([0, 400])
        .paddingInner(0.3)
        .paddingOuter(0.4)

    const y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d){
            return d.revenue
        })])
        .range([0, 400])

    const rects = g.selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("y", 0)
        .attr("x", function(d){
            return x(d.month);
        })
        .attr("width", x.bandwidth)
        .attr("height", function(d){
            return y(d.revenue);
        })
        .attr("fill", "grey");

})