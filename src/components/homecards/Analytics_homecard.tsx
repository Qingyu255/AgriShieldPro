import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
interface AnalyticsHomecardProps {
    weather: string
    soilQuality: string
};

export default function Analytics_homecard({ weather, soilQuality }: AnalyticsHomecardProps) {
  return (
    <div>
      <Link href="/selectplan">
        <div className='flex flex-col bg-[#4CB5AB] h-48 w-48 p-3 pt-0 rounded-xl'>
            <div className='flex justify-center pt-3'>
              <Image src="/agrishield_logo.png" alt="Logo" width={120} height={100} />
            </div>
            <h1 className='text-[25px] font-bold text-white pl-1 text-center'>More Plans</h1>
        </div>
      </Link>
    </div>
  )
}