import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const StackedBarChart = ({ data, width, height, color }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const margin = { top: 20, right: 30, bottom: 50, left: 60 }; // Increase bottom margin for the y-axis labels
    const innerWidth = width - margin.left - margin.right;
    const innerHeight = height - margin.top - margin.bottom;

    const processedData = data.monthlyData.map(d => ({
      month: d.month,
      sessionActivity: parseInt(d.sessionActivity.replace('min', ''))
    }));

    const x = d3.scaleBand()
      .domain(processedData.map(d => d.month))
      .range([0, innerWidth])
      .padding(0.1);

    const y = d3.scaleLinear()
      .domain([0, d3.max(processedData, d => d.sessionActivity)])
      .nice()
      .range([innerHeight, 0]);

    const stack = d3.stack()
      .keys(["sessionActivity"])
      .order(d3.stackOrderNone)
      .offset(d3.stackOffsetNone);

    const series = stack(processedData);

    svg.selectAll("*").remove();

    const g = svg.append("g")
      .attr("transform", `translate(${margin.left},${margin.top})`);

    g.selectAll("path")
      .data(series)
      .join("path")
      .attr("fill", ({ key }) => color || "steelblue") // Use passed color or default to steelblue
      .attr("d", d3.area()
        .x(d => x(d.data.month) + x.bandwidth() / 2)
        .y0(d => y(d[0]))
        .y1(d => y(d[1]))
      );

    g.append("g")
      .attr("transform", `translate(0,${innerHeight})`)
      .call(d3.axisBottom(x))
      .selectAll('text')
      .style('text-anchor', 'end')
      .attr('transform', 'rotate(-45)'); // Rotate the labels

    g.append("g")
      .call(d3.axisLeft(y));
  }, [data, width, height, color]);

  return (
    <svg ref={svgRef} width={width} height={height}>
      {/* SVG content will be rendered here */}
    </svg>
  );
};

export default StackedBarChart;
