import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const BarChart = ({ data, width, height, barWidth, barColor }) => {
  const svgRef = useRef();

  useEffect(() => {
    if (!data) return;

    const svg = d3.select(svgRef.current);

    // Clear existing chart
    svg.selectAll('*').remove();

    const margin = { top: 20, right: 20, bottom: 50, left: 60 }; // Adjust bottom margin for x-axis labels
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const x = d3.scaleBand()
      .domain(data.map(d => d.month))
      .range([0, innerWidth])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(data, d => d.activeUsers)])
      .nice()
      .range([innerHeight, 0]);

    const xAxis = d3.axisBottom(x);

    const yAxis = d3.axisLeft(y)
      .ticks(5) // Adjust the number of ticks on the y-axis
      .tickSize(0); // Remove horizontal lines

    svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top + innerHeight})`)
      .call(xAxis)
      .selectAll('text')
      .attr('transform', 'rotate(-45)')
      .style('text-anchor', 'end');

    svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`)
      .call(yAxis);

    svg.selectAll('.bar')
      .data(data)
      .enter().append('rect')
      .attr('class', 'bar')
      .attr('x', d => x(d.month) + margin.left)
      .attr('y', d => y(d.activeUsers) + margin.top)
      .attr('width', barWidth) // Use barWidth prop to set the width of bars
      .attr('height', d => innerHeight - y(d.activeUsers))
      .style('fill', barColor); // Use barColor prop to set the color scheme of bars

  }, [data, width, height, barWidth, barColor]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      {/* Add any additional SVG elements here */}
    </svg>
  );
};

export default BarChart;
