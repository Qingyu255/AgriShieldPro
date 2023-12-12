import BarChart from '@/components/charts/BarChart'
import Analytics_homecard from '@/components/homecards/Analytics_homecard'
import Riskprofile_homecard from '@/components/homecards/Riskprofile_homecard'
import React from 'react'

const dummyData = {
    title: "This is a dummy chart",
    labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Array of labels
    datasets: [
      {
        data: [20, 25, 35, 46, 33, 30, 44], // Array of data values
        label: "Premium Amount", // Label for the dataset
        backgroundColor: "#f7faf8", // Background color for the bars
        borderColor: "#66fa98", // Border color for the bars
        borderWidth: 2.7, // Border width for the bars
      }
    ]
}

export default function page() {
  return (
    <>
        <div className='flex flex-col gap-5 m-4'>
            <div className='flex flex-row justify-center items-center gap-4 '>
                <Analytics_homecard weather='Sunny' soilQuality='Good' />
                <Riskprofile_homecard risklevel='High' riskscore={60} />
            </div>
            <div className='flex justify-center items-center'>
                <div className='pr-12 mr-12 text-xl font-semibold'>
                    Insurance Premium Breakdown
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='flex justify-center items-center bg-[#e6e6e6] rounded-xl h-[296px] w-[400px] p-3 flex-col'>
                    <div className='w-full'>
                        <h1 className='font-medium'>This Month' Premium: RM 44.00</h1>
                    </div>
                    <div className='flex items-center mt-1'>
                        <BarChart chartData={dummyData} />
                    </div>
                </div>
                
            </div>
        </div>
    </>

  )
}
