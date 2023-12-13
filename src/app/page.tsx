import {Button} from "@nextui-org/react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-8">
      <div className="flex items-center justify-center flex-col">
        <h1 className="text-3xl font-semibold text-center py-10 mt-10">
          Protect Your Agriculture Now
        </h1>
        <h2 className="py-5 m-5 text-center text-small text-slate-400">
          Get Your Personalised Insurance Coverage Now
        </h2>
        <Link href="/signup" className="w-full">
          <Button color="success" fullWidth>
              <h1 className="font-medium">
                Get Insured Now
              </h1>
          </Button>      
        </Link>
        <Link href="/signup" className="w-full my-4">
        <Button color="success" fullWidth>
            <h1 className="font-medium">
              Learn More About Us
            </h1>  
        </Button>
        </Link>
      </div>
    </main>
    
  )
}
