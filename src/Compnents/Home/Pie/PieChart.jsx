import React, { useEffect, useState } from "react";
// import { Pie } from 'react-chartjs-2';
import "./PieChart.css";
const PieChart1 = ({ value, size, strokewidth }) => {
  const halfsize = size * 0.5;
  const radius = halfsize - strokewidth * 0.5;
  const circumference = 2 * Math.PI * radius;
  const strokeval = (value * circumference) / 100;
  const dashval = `${strokeval} ${circumference}`;

  const trackstyle = { strokeWidth: strokewidth };
  const indicatorstyle = { strokeWidth: strokewidth, strokeDasharray: dashval };
  const rotateval = `rotate(-90 ${halfsize},${halfsize})`;

  return (
    <svg width={size} height={size} className="donutchart">
      <circle
        r={radius}
        cx={halfsize}
        cy={halfsize}
        transform={rotateval}
        style={trackstyle}
        className="donutchart-track"
      />
      <circle
        r={radius}
        cx={halfsize}
        cy={halfsize}
        transform={rotateval}
        style={indicatorstyle}
        className="donutchart-indicator"
      />
      <text
        className="donutchart-text"
        x={halfsize}
        y={halfsize}
        style={{ textAnchor: "middle" }}
      >
        <tspan className="donutchart-text-val don">{value.toFixed(1)}</tspan>
        <tspan className="donutchart-text-percent don">%</tspan>
      </text>
    </svg>
  );
};
export default PieChart1;
