/*
*    main.js
*    Mastering Data Visualization with D3.js
*    Project 1 - Star Break Coffee
*/

const svg = d3.select("chart-area")
    .append("svg")
        .attr("width", 400)
        .attr("height", 400)


d3.json("data/revenues.json").then(function(data){
    data.forEach(function(d){
        d.revenue = +d.revenue
        d.profit = +d.profit
    })
    console.log(data)
})