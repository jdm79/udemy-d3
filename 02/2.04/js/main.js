/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.4 - Adding SVGs with D3
*/


const svg = d3.select("#canvas").append("svg")
    .attr("width", 300)
    .attr("height", 300)

const rect = svg.append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 300)
    .attr("height", 100)
    .attr("fill", "blue")

// let r = 0
// let radius = 0
// let svg 
// let circle

// const drawCircle = () => {
//   if (count > 0) {
//     location.reload()
//   }

//   circle = svg.append("circle")
//     .attr("cx", 500)
//     .attr("cy", 250)
//     .attr("r", radius)
//     .attr("fill", "blue")
//     count += 1
// }

// const myFunc = () => {

//   radius = document.getElementById("radius").value

//   document.getElementById("diameter").innerHTML = radius * 2
//   r = radius
//   svg = d3.select("#canvas").append("svg")
//   .attr("width", 1000)
//   .attr("height", 1000)
//   drawCircle()
// }
    