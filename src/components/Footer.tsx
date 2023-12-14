"use client"
import React, { useContext, useEffect, useState } from "react"
import Link from 'next/link'
import Image from 'next/image'
import { LoginContext } from "../app/providers"



export default function Footer() {
  const { isLoggedIn, setLoggedIn, isSigningUp, setSigningUp } = useContext(LoginContext)
  const [shouldShowButton, setShouldShowButton] = useState(true)
  return (
    <>
    
      <div className="fixed inset-x-0 bottom-0 bg-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto ">
      {isLoggedIn ?
        <div className="flex justify-between items-center py-3 first-letter px-4">
          <Link href="/home">
            <div className="flex flex-col items-center">
              <Image src="/icons/home-icon.svg" alt="Home" width={24} height={24} />
              <span className="text-xs mt-1">Home</span>
            </div>
          </Link>
          <Link href="/claims">
            <div className="flex flex-col items-center">
              <Image src="/icons/claims-icon.svg" alt="Claims" width={24} height={24} />
              <span className="text-xs mt-1">Claims</span>
            </div>
          </Link>
          <Link href="/myplan">
            <div className="flex flex-col items-center">
              <Image src="/icons/myplan-icon.svg" alt="My Plan" width={24} height={24} />
              <span className="text-xs mt-1">My Plan</span>
            </div>
          </Link>
          <Link href="/analytics">
            <div className="flex flex-col items-center">
              <Image src="/icons/analytics-icon.svg" alt="Analytics" width={24} height={24} />
              <span className="text-xs mt-1">Analytics</span>
            </div>
          </Link>
          <Link href="/wallet">
            <div className="flex flex-col items-center">
              <Image src="/icons/payments-icon.svg" alt="Payments" width={24} height={24} />
              <span className="text-xs mt-1">Wallet</span>
            </div>
          </Link>
          {/* <Link href="/contact">
            <div className="flex flex-col items-center">
              <Image src="/contact-icon.svg" alt="Contact Us" width={24} height={24} />
              <span className="text-xs mt-1">Contact Us</span>
            </div>
          </Link> */}
        </div>
        :
        <div className='h-[70px] w-full flex justify-center items-center bg-[#4CB5AB] border-t'>
          <Image
              src="/agrishield_logo.png" // Assuming the logo is in the public directory
              alt="Logo"
              width={50}
              height={50}
          />
          <p className='text-sm'>AgriShieldPro 2023</p>
        </div>
        } 
      </div>
    </div>
    
    </>
  )
}
