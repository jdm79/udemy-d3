/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

d3.csv("ages.csv").then(function(data){
  data.forEach(function(d){
    d.age = +d.age
  })
  let svg = d3.select("#chart-area").append("svg")
  .attr("width", 500)
  .attr("height", 500)

  let rects = svg.selectAll("rect")
    .data(data)

  rects.enter()
    .append("rect")
      .attr("x", function(d,i){
        return (i * 50) + 25 
      })
      .attr("y", 25)
      .attr("width", 25)
      .attr("height", function(d){
        return d.age * 2
      })
      .attr("fill", "red")
  })
