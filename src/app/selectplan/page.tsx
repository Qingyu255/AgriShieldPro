"use client"
import React from 'react'
import PlanCard from '@/components/planselector/PlanCard'
import { ArrowBackIcon } from "@chakra-ui/icons"
import { useRouter } from "next/navigation"
import { ButtonGroup, Button } from "@chakra-ui/react"
import PlanSelector from '@/components/planselector/PlanSelector'
export default function page() {
    const router = useRouter()
    const insurancePlans = [
        {
          planName: 'Rural Shield Insurance',
          companyName: 'AIA',
          description: 'Offers protection for a range of rural assets, including crops, livestock, and farm equipment, with flexible coverage options tailored to rural and farming communities.',
          logoSrc: 'data:image/png;base64,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'
        },
        {
          planName: 'Allianz Farm Protect',
          companyName: 'Allianz',
          description: 'Comprehensive insurance plan covering various aspects of farming operations, including crop protection, livestock insurance, and farm property coverage.',
          logoSrc: 'data:image/png;base64,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'
        },
        {
            planName: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
            companyName: 'Bajaj Allianz',
            description: 'A government-backed crop insurance scheme providing comprehensive risk coverage against crop loss due to natural calamities, pests, and diseases.',
            logoSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStSz0p3F4jXm9tMpU6vt0q3_5tdhA_hF1uig&usqp=CAU'
        },
        {
          planName: 'Prudential Agribusiness Insurance',
          companyName: 'Prudential',
          description: 'Tailored insurance solutions for agribusinesses, offering coverage for crops, livestock, and agricultural machinery, with a focus on sustainable farming practices.',
          logoSrc: 'data:image/png;base64,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'
        },
        {
          planName: 'AXA Smart Farming Insurance',
          companyName: 'AXA',
          description: 'Designed for modern farmers, this plan offers a comprehensive range of coverages, including crop damage, livestock protection, and farm equipment insurance.',
          logoSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/AXA_Logo.svg/1280px-AXA_Logo.svg.png'
        }
    ]
  return (
    <div className='flex justify-center flex-col'>
        {/* Insert back Button */}
        <div className='p-3.5'>
            <Button
                variant="outline"
                className='bg-[#FF6B35] flex justify-center items-center'
                onClick={() => router.back()}
            >
                <ArrowBackIcon />
            </Button>
        </div>
        <PlanSelector />
    </div>
  )
}