import React from 'react'

interface AnalyticsHomecardProps {
    weather: string
    soilQuality: string
}

export default function Analytics_homecard({ weather, soilQuality }: AnalyticsHomecardProps) {
  return (
    <div>
      <div className='flex flex-col bg-[#72dd48] h-56 w-48 p-3 rounded-xl gap-y-3'>
            <h1 className='text-2xl font-bold'>
              ANALYTICS
            </h1>
            <h1>Today's Weather: {weather}</h1>
            <h1>Soil Quality: {soilQuality}</h1>
        </div>
    </div>
  )
}
