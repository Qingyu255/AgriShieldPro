import React from 'react'
import PlanSelector from '@/components/planselector/PlanSelector'
import AgriShieldPlanCard from '@/components/agrishieldcards/AgriShieldPlanCard'

export default function page() {
  return (
    <div className='py-2'>
        {/* <div className='flex flex-row'>
            <h1 className='text-[#FF6B35] flex justify-center items-center font-bold text-2xl pl-3.5 pr-1'>
                Shopee AgriShieldPro         
            </h1>
      
        </div>
        <div className='flex p-3.5 pb-9'>
            <AgriShieldPlanCard />
        </div> */}
      <PlanSelector />
    </div>
  )
}
