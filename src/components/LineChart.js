import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const LineChart = ({ data, width, height, color }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 30, bottom: 50, left: 60 }; // Increased bottom margin
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const processedData = data.monthlyData.map(d => ({
      month: d.month,
      activeUsers: d.activeUsers
    }));

    const x = d3.scaleBand()
      .domain(processedData.map(d => d.month))
      .range([0, innerWidth])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(processedData, d => d.activeUsers)])
      .nice()
      .range([innerHeight, 0]);

    svg.selectAll("*").remove();

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-45)'); // Rotate the labels

    // Adjust the ticks on the y-axis
    g.append("g")
      .call(d3.axisLeft(y).ticks(5).tickFormat(d => d * 0.8)); // Decrease the tick values

    // Draw line
    const line = d3.line()
      .x(d => x(d.month) + x.bandwidth() / 2)
      .y(d => y(d.activeUsers));

    g.append("path")
      .datum(processedData)
      .attr("fill", "none")
      .attr("stroke", color || "steelblue") // Use passed color or default to steelblue
      .attr("stroke-width", 1.5)
      .attr("d", line);

    // Draw dots
    g.selectAll("circle")
      .data(processedData)
      .enter().append("circle")
      .attr("cx", d => x(d.month) + x.bandwidth() / 2)
      .attr("cy", d => y(d.activeUsers))
      .attr("r", 4)
      .attr("fill", color || "steelblue"); // Use passed color or default to steelblue
  }, [data, width, height, color]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      {/* SVG content will be rendered here */}
    </svg>
  );
};

export default LineChart;
