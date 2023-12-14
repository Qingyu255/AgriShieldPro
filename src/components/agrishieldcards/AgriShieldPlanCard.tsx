import React from 'react'
import { Card, Button } from '@chakra-ui/react'
import { AiOutlineRobot } from 'react-icons/ai'
import Link from 'next/link'

export default function AgriShieldPlanCard() {
  return (
    <Card p="4" boxShadow="xl" borderRadius="lg" bg="white" style={{ border: '2px solid #FF6B35' }}>
      <div className="flex flex-col items-center text-center ">
        <AiOutlineRobot size="3rem" className="text-[#4CB5AB]" />
        <h2 className="mt-4 font-bold text-xl">AI Insurance Advisor</h2>
        <p className="my-2">
          Our AI-powered insurance advisor helps you choose the perfect plan based on your unique agricultural needs.
        </p>
        <ul className="mb-4 text-left font-semibold">
          <li>✔️ Quick and easy policy selection</li>
          <li>✔️ 24/7 intelligent support</li>
          <li>✔️ Data-driven insights for better coverage</li>
          <li>✔️ Cost Efficient: Pay as you go</li>
          <li>✔️ Cancel Anytime</li>
        </ul>
        <Link href="/onboarding">
        
            <Button color="white" size="lg" style={{ background: '#FF6B35' }}>
            Select
            </Button>
        </Link>
      </div>
    </Card>
  )
}
