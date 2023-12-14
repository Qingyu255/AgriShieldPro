import React from 'react'
import ScoreBreakdownCard from '@/components/analytics/ScoreBreakdownCard'
import LineChart from '@/components/charts/LineChart'
import { Button } from '@chakra-ui/react';

export default function page() {
    const dummyData = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Air Temperature (°C)",
            data: [22, 25, 28, 30, 26, 24, 25], // Typical temperature range in °C
            borderColor: "red",
            borderWidth: 2,
            fill: false,
            backgroundColor: "white"
          },
          {
            label: "Humidity (%)",
            data: [65, 60, 55, 50, 70, 80, 75], // Typical humidity range in percentage
            borderColor: "blue",
            borderWidth: 2,
            fill: false,
            backgroundColor: "white"
          },
          {
            label: "Soil Moisture (%)",
            data: [40, 32, 41, 43, 49, 52, 40], // Soil moisture levels in percentage
            borderColor: "green",
            borderWidth: 2,
            fill: false,
            backgroundColor: "white"
          },
          {
            label: "Natural Disaster Risk (1-10)",
            data: [2.5, 3, 5, 4.5, 3, 4, 2], // Risk score on a scale of 1-10
            borderColor: "orange",
            borderWidth: 2,
            fill: false,
            backgroundColor: "white"
          },
        ],
      }
  return (
    <div className='flex flex-col gap-5 m-4'>
        <div className='flex items-center justify-center'>
            <ScoreBreakdownCard riskscore={763} premiumPayable={44}/>
        </div>
        <div className='w-full text-left px-2 md:flex justify-center items-center'>
            <Button variant="link" colorScheme="blue" className='underline'>
                How is my Farm Score calculated?
            </Button>
        </div>
        
        <div>
            {dummyData.datasets.map((dataset, index) => (
                <div key={index}className='py-2 ml-3 md:flex flex-col justify-center items-center'>
                    <h2 className='font-semibold pb-1'>{dataset.label}</h2>
                    <LineChart chartData={{ title:"title", labels: dummyData.labels, datasets: [dataset] }} />
                </div>
            ))}
        </div>
    </div>
  )
}
