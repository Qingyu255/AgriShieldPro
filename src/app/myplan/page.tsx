import React from 'react'
import BarChart from '@/components/charts/BarChart'
import MyPlanCard from '@/components/planselector/MyPlanCard'
import {Button} from "@nextui-org/react"
import Link from "next/link"

export default function page() {
    const dummyData = {
        title: "This is a dummy chart",
        labels: ["Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], // Array of labels
        datasets: [
            {
            data: [120, 125, 135, 146, 133, 130, 144], // Array of data values
            label: "Premium Amount", // Label for the dataset
            backgroundColor: "#f7faf8", // Background color for the bars
            borderColor: "#4CB5AB", // Border color for the bars
            borderWidth: 2.7, // Border width for the bars
            }
        ]
    }
    const plan = {
        planName: 'AgriShieldPro x AIA',
        companyName: 'Underwritten by: AIA',
        description: 'AgriShieldPro x AIA uses your Farm Score to prioritise protection for rural assets, including crops, livestock, and farm equipment',
        logoSrc: 'data:image/png;base64,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'
      }
  return (
    <div className='flex flex-col gap-5 m-4'>
        <div className='flex justify-center flex-col md:items-center'>
            <h1 className="text-2xl font-semibold pb-3 pl-0.5">My Current Plan</h1>
            <MyPlanCard 
                planName={plan.planName} 
                companyName={plan.companyName} 
                description={plan.description} 
                logoSrc={plan.logoSrc}
                premiumAmount={"December Premium Payable: IDR " + 144 + "k"}
            />
        </div>
        <div className='flex justify-center items-center'>
            <div className='pr-12 mr-12 text-xl font-semibold pt-2'>
                Insurance Premium Breakdown
            </div>
        </div>
        <div className='flex justify-center items-center flex-col'>
            <div className='flex justify-center items-center bg-[#e6e6e6] rounded-xl h-[296px] w-[400px] p-3 flex-col'>
                <div className='w-full'>
                    <h1 className='font-medium'>December Premium: IDR 144k</h1>
                </div>
                <div className='flex items-center mt-1'>
                    <BarChart chartData={dummyData} />
                </div>
            </div>

        <Link href="/plans" className="w-full mt-5">
            <Button fullWidth className="bg-[#4CB5AB]">
                <h1 className="font-medium text-base">
                View Other AgriShield Plans
                </h1>
            </Button>      
        </Link>
        <Button fullWidth className="border-2 border-[#4CB5AB] bg-white my-3">
            <h1 className="font-medium text-base">
            Cancel Current Plan
            </h1>
        </Button>     
        </div>
        
    </div>
  )
}
