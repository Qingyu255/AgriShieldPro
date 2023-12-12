'use client'
import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Tooltip,
  BarController,
  BarElement,
} from 'chart.js'


ChartJS.register(
  CategoryScale,
  LinearScale,
  Tooltip, 
  BarController,
  BarElement
  )

type chartProps = {
  chartData: {
    title: string,
    labels: string[],
    datasets: {
      data: number[],
      label: string,
      backgroundColor: string,
      borderColor: string,
      borderWidth: number,
    }[]
  }
}

export default function BarChart({ chartData }: chartProps) {
  // display course codes uppercase
  const upperCaseLabels = chartData.labels.map((label) => label.toUpperCase())
  const options = {
    maintainAspectRatio: false, // Set to false to make the chart responsive
    responsive: true,
    elements: {
      bar: {
        borderRadius: 9, // Adjust the bar border radius as needed
      },
    },
    scales: {
      x: {
        // type: 'category',
        labels: upperCaseLabels,
        title: {
          display: false,
          text: 'Month',
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
        beginAtZero: true,
        title: {
          display: false,
          text: 'Premium',
          font: {
            size: 13,
            family: 'Arial',
            
          },
        },
        grid: {
          display: false, // Hide the background grid lines on the x-axis
        },
      },
    },
    
  };

  return (
    <div className='flex flex-col'>
      {/* <h1 className='flex justify-center underline font-semibold'>{chartData.title}</h1> */}
      <div
        style={{
          width: '352px',
          height: '250px'
        }}
      >
        <Bar data={chartData} options={options} />
      </div>
    </div>
  );
}
