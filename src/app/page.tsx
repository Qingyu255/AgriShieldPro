import {Button} from "@nextui-org/react"
import Link from "next/link"
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-8">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-4xl font-semibold text-center pt-10">
          Protect Your Agriculture Now
        </h1>
        <Image
          src="/happyFruits.png"
          alt="happyFruits"
          width={300}
          height={300}
        >

        </Image>
        <h2 className="py-5 m-2 text-center text-small text-slate-400">
          Get Tailored Agriculture Insurance Coverage with ShopeeAgrisurance
        </h2>
        <Link href="/signup" className="w-full">
          <Button fullWidth className="bg-[#4CB5AB]">
              <h1 className="font-semibold text-lg">
                Get Insured Now
              </h1>
          </Button>      
        </Link>
        <Link href="/signup" className="w-full my-4">
        <Button fullWidth className="bg-[#FF6B35]">
            <h1 className="font-medium">
              Learn More About Us
            </h1>  
        </Button>
        </Link>
      </div>
    </main>
    
  )
}
