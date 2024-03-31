import React, { useRef, useEffect } from 'react';
import * as d3 from 'd3';

const PieChart = ({ data, width = 600, height = 400, colors = ['#1f77b4', '#ff7f0e', '#2ca02c'], legends = ["Likes", "Comments", "Shares"] }) => {
  const svgRef = useRef();

  useEffect(() => {
    const svg = d3.select(svgRef.current);
    const radius = Math.min(width, height) / 2;

    const colorScale = d3.scaleOrdinal()
      .domain(legends)
      .range(colors);

    const arc = d3.arc()
      .outerRadius(radius - 10)
      .innerRadius(0);

    const pie = d3.pie()
      .sort(null)
      .value(d => d.count);

    const getTotalCount = (field) => {
      return data.monthlyData.reduce((total, monthData) => total + monthData[field], 0);
    };

    const arcs = pie(legends.map(legend => ({
      category: legend,
      count: getTotalCount(legend.toLowerCase())
    })));

    svg.selectAll("*").remove();

    const g = svg.append("g")
      .attr("transform", `translate(${width / 2},${height / 2})`);

    g.selectAll("path")
      .data(arcs)
      .enter().append("path")
      .attr("fill", d => colorScale(d.data.category))
      .attr("d", arc)
      .append("title")
      .text(d => `${d.data.category}: ${d.data.count}`);

  }, [data, width, height, colors, legends]);

  return (
    <div className="flex">
      <svg ref={svgRef} width={width} height={height}></svg>
      <div className=" top-0 right-0 mt-4 mr-4 flex flex-col">
        {legends.map((legend, index) => (
          <div key={index} className="flex items-center mb-2">
            <div className="w-4 h-4 mr-2" style={{ backgroundColor: colors[index] }}></div>
            <div>{legend}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChart;
