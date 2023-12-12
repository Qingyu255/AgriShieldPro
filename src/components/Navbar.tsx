import React from "react"
import Link from "next/link"
import Image from 'next/image'
import {Avatar, AvatarIcon} from "@nextui-org/react"
import {Button} from "@nextui-org/react";

export default function Navbar() {
    const isLoggedIn = false
    return (
        <>
            <div className="flex bg-[rgb(255,255,255)] items-center rounded-b-md">
                <div className="p-5">
                    <Link href='/home' className="flex flex-row justify-center items-center gap-1 text-2xl font-bold">
                        <Image
                            src="/agrishield_logo.png" // Assuming the logo is in the public directory
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                        AgriShield
                    </Link>
                </div>
                <div className="flex justify-end">
                    
                </div>
                
                <ul className="flex flex-row space-x-4 ml-auto p-3 px-5 text-md">
                    {/* <li className="flex items-center">
                        <Link href="/home">Home</Link>
                    </li> */}
                    {isLoggedIn?
                        <li className="flex items-center">
                            <Link href="/getstarted" className="font-medium">
                                <Button size="md">
                                    Login / Sign Up
                                </Button> 
                            </Link>
                        </li>
                        :
                        <Avatar
                            icon={<AvatarIcon />}
                            classNames={{
                            base: "bg-gradient-to-br from-[#ffffff] to-[#72dd48]",
                            icon: "text-black/80",
                            }}
                            isBordered
                        />
                    }
                </ul>
                    
                    
                    {/* <li className="flex items-center">
                        <Link href="/">Plans</Link>
                    </li> */}
                    
                    {/* <Avatar name="QY" isBordered={true} color="success" /> */}
                    
            </div>
        </>
    )
}