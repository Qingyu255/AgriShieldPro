import React from 'react'
import { Button } from "@chakra-ui/react"
import Link from 'next/link'
import AddressForm from '@/components/onboarding/AddressForm'
import Image from 'next/image'
import SensorCard from '@/components/onboarding/SensorCard'

export default function page() {
  return (
    <div className='flex justify-center items-center p-5 '>

      <div className='flex justify-center items-center w-full'>
        <SensorCard />
      </div>
      

    </div>
  )
}

