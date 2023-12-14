"use client"
import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  LineController,
  PointElement,
  LineElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip,
  LineController,
  PointElement,
  LineElement
);

type chartProps = {
  chartData: {
    title: string;
    labels: string[]; // Update labels to correspond to x-axis data
    datasets: {
      data: number[];
      label: string;
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
    }[];
  };
};

export default function LineChart({ chartData }: chartProps) {
  const options = {
    maintainAspectRatio: false, // Set to false to make the chart responsive
    responsive: true,
    elements: {
      line: {
        tension: 0.4, // Adjust the line tension as needed
        fill: false, // Remove area fill under the line
      },
    },
    scales: {
      x: {
        labels: chartData.labels, // Use your x-axis labels here
        title: {
          display: false,
          text: 'Time', // Update the x-axis title
          font: {
            size: 12,
            family: 'Arial',
          },
        },
        grid: {
          display: false, // Hide the background grid lines on the x-axis
        },
      },
      y: {
        beginAtZero: false,
        title: {
          display: false,
          text: 'Value', // Update the y-axis title
          font: {
            size: 13,
            family: 'Arial',
          },
        },
        grid: {
          display: false, // Hide the background grid lines on the y-axis
        },
      },
    },
  };

  return (
    <div className="flex flex-col">
      {/* <h1 className='flex justify-center underline font-semibold'>{chartData.title}</h1> */}
      <div
        style={{
          width: '352px',
          height: '250px',
        }}
      >
        <Line data={chartData} options={options} />
      </div>
    </div>
  );
}
