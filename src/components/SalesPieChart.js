import React, { useState, useRef } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import "./SalesPieChart.css";
ChartJS.register(ArcElement, Tooltip);

const SALES_DATA = [
  { label: "Direct", value: 300.56, color: "#000" },
  { label: "Affiliate", value: 135.18, color: "#8EC5FC" },
  { label: "Sponsored", value: 154.02, color: "#00A86B" },
  { label: "E-mail", value: 48.96, color: "#A569BD" },
];

const getChartData = (data) => ({
  labels: data.map((item) => item.label),
  datasets: [
    {
      data: data.map((item) => item.value),
      backgroundColor: data.map((item) => item.color),
      hoverOffset: 10,
      borderWidth: 2,
      borderRadius: 15,
      cutout: "75%",
    },
  ],
});

const SalesPieChart = () => {
  const [hoveredData, setHoveredData] = useState(null);
  const chartRef = useRef(null);

  const options = {
    plugins: {
      tooltip: {
        enabled: false,
        external: (context) => {
          const tooltip = context.tooltip;
          if (!chartRef.current || tooltip.opacity === 0) {
            setHoveredData(null);
            return;
          }
          const index = tooltip.dataPoints?.[0]?.dataIndex;
          if (index !== undefined) {
            setHoveredData({
              label: SALES_DATA[index].label,
              value: SALES_DATA[index].value,
              x: tooltip.caretX ?? 150,
              y: tooltip.caretY ?? 150,
            });
          }
        },
      },
    },
  };

  return (
    <div className="sales-chart-wrapper">
      <h2 className="graph-title">Total Sales</h2>
      <div className="sales-chart-container">
        <Doughnut
          ref={chartRef}
          data={getChartData(SALES_DATA)}
          options={options}
        />
        {hoveredData && (
          <div
            className="chart-tooltip"
            style={{
              top: hoveredData.y - 10,
              left: hoveredData.x + 10,
            }}
          >
            <span className="category">{hoveredData.label}</span>
            <span className="amount">${hoveredData.value.toFixed(2)}</span>
          </div>
        )}
      </div>
      <div className="belowpiechart">
        {SALES_DATA.map((item) => (
          <div key={item.label} className="sales-data-row">
            <span
              className="sales-dot"
              style={{ backgroundColor: item.color }}
            ></span>
            <span className="sales-label">{item.label}</span>
            <span className="sales-amount">${item.value.toFixed(2)}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesPieChart;
