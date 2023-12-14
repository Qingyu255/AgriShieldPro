import React from 'react'
import {CircularProgress} from "@nextui-org/react"
import Link from 'next/link'

interface RiskProfileHomecardProps {
    risklevel: string
    riskscore: number
}

export default function Riskprofile_homecard({ risklevel, riskscore }: RiskProfileHomecardProps) {
  return (
    <div>
      <div className='flex flex-col justify-center items-center bg-[#4CB5AB] h-48 w-48 p-3 text-center rounded-xl gap-y-3 border-1'>
        <Link href="myplan">
            <h1 className='text-[25px] font-bold text-white'>
              My Plan:
            </h1>
            <h1 className='text-base font-semibold text-slate-600 pt-2'>
              AgriShieldPro x AIA
            </h1>
        </Link>
            {/* <div className='flex flex-row'>
              <div className='flex w-fit pr-2 items-start'>
                <h1 className='text-[23px] font-bold mt-2'>{risklevel.toUpperCase()}</h1>
              </div>
              <div className='flex items-center justify-end'>
                <CircularProgress
                  aria-label="Loading..."
                  classNames={{
                    svg: "w-24 h-24 drop-shadow-md",
                    // indicator: "stroke-white",
                    // track: "stroke-white/10",
                    value: "text-2xl font-semibold text-white",
                  }}
                  value={riskscore}
                  color="warning"
                  showValueLabel={true}
                />
              </div>
            </div> */}

        </div>
    </div>
  )
}
