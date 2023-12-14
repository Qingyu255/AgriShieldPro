import SignUpDetails2 from '@/components/signup/SignUpDetails2'
import React from 'react'

export default function page() {
  return (
    <div className='flex justify-center items-center flex flex-col'
    style={{
      height: '100vh', // Make sure it covers the full height
      width: '100vw', // Make sure it covers the full width
      background: 'linear-gradient(to bottom, #ffffff, #4CB5AB)' // Replace with your green color and white
    }}>
      <SignUpDetails2/>
    </div>
  )
}
