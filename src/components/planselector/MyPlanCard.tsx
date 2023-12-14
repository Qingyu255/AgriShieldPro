import React from 'react'
import {Card, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

interface PlanCardProps {
    planName: string
    companyName: string
    description: string
    premiumAmount: String
    logoSrc: string
}

export default function MyPlanCard({planName, companyName, description, premiumAmount, logoSrc} : PlanCardProps) {
  return (
    <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
            <Image
            alt="firm logo"
            height={40}
            radius="sm"
            src={logoSrc}
            width={40}
            />
            <div className="flex flex-col">
            <p className="text-md">{planName}</p>
            <p className="text-small text-default-500">{companyName}</p>
            </div>
        </CardHeader>
        <Divider/>
        <CardBody>
            <p>{description}</p>
        </CardBody>
        <Divider/>
        <CardFooter>
            <h1 className='font-semibold w-full text-left text-lg'>{premiumAmount}</h1>
        </CardFooter>
    </Card>
  )
}
