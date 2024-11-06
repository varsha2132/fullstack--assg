// src/components/Widgets/Chart.js
import React from 'react';
import { Line } from 'react-chartjs-2';

const Chart = ({ data }) => (
  <Line
    data={data}
    options={{
      responsive: true,
      plugins: {
        legend: {
          display: true,
        },
      },
    }}
  />
);

export default Chart;
