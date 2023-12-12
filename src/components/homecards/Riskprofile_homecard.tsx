import React from 'react'
import {CircularProgress} from "@nextui-org/react"

interface RiskProfileHomecardProps {
    risklevel: string
    riskscore: number
}

export default function Riskprofile_homecard({ risklevel, riskscore }: RiskProfileHomecardProps) {
  return (
    <div>
      <div className='flex flex-col bg-[#72dd48] h-56 w-48 p-3 rounded-xl gap-y-3'>
            <h1 className='text-2xl font-bold'>
              Crop Damage Risk Score
            </h1>
            <div className='flex flex-row'>
              <div className='flex items-center pr-2'>
                <h1 className='text-[27px] font-bold text-[#ffffffff]'>{risklevel.toUpperCase()}</h1>
              </div>
              <div className='flex items-center justify-center'>
                <CircularProgress
                  aria-label="Loading..."
                  classNames={{
                    svg: "w-24 h-25 drop-shadow-md",
                    // indicator: "stroke-white",
                    // track: "stroke-white/10",
                    value: "text-2xl font-semibold text-white",
                  }}
                  value={riskscore}
                  color="warning"
                  showValueLabel={true}
                />
              </div>
            </div>
            {/* <h1>RiskScore: {riskscore}</h1> */}
        </div>
    </div>
  )
}
