"use client"
import React, { useContext, useEffect, useState } from "react"
import Link from "next/link"
import Image from 'next/image'
import {Avatar, AvatarIcon} from "@nextui-org/react"
import {Button} from "@nextui-org/react"
import { LoginContext } from "../app/providers"

export default function Navbar() {
    const { isLoggedIn, setLoggedIn, isSigningUp, setSigningUp } = useContext(LoginContext)
    const [shouldShowButton, setShouldShowButton] = useState(true);

    // var shouldShowButton = true
    useEffect(() => {
        if (isSigningUp) {
          console.log(isSigningUp);
          setShouldShowButton(!isSigningUp);
        }
      }, [isSigningUp]);
    

    function handleLogin() {
        // setLoggedIn(!isLoggedIn)
        if (!isLoggedIn) {
            setSigningUp(true)

        }
        
        
    }
    // const isLoggedIn = false
    return (
        <>
            <div className="flex bg-[rgb(255,255,255)] items-center rounded-b-md">
                <div className="p-5 px-3">
                    <Link href='/' className="flex flex-row justify-center items-center gap-1 text-xl font-bold">
                    <Image
                            src="/agrishield_logo.png" // Assuming the logo is in the public directory
                            alt="Logo"
                            width={50}
                            height={50}
                        />
                        AgriShieldPro
                    </Link>
                </div>
                <div className="flex justify-end">
                    
                </div>
                
                <ul className="flex flex-row space-x-4 ml-auto p-3 px-5 text-md">
                    {/* <li className="flex items-center">
                        <Link href="/home">Home</Link>
                    </li> */}
                    {isLoggedIn?
                        <Link href="/home">
                            <Avatar
                                icon={<AvatarIcon />}
                                classNames={{
                                base: "bg-gradient-to-br from-[#ffffff] to-[#4CB5AB]",
                                icon: "text-black/80",
                                }}
                                isBordered
                            />
                        </Link>
                        :
                        shouldShowButton &&
                        <li className="flex items-center">
                            <Link href="/signup" className="font-medium">
                                <Button size="md" onClick={handleLogin} className="font-semibold bg-[#FF6B35] text-white">
                                    Sign Up
                                </Button> 
                            </Link>
                        </li>
                        
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