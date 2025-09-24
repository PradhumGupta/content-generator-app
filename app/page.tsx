"use client"
import { Button } from "@/components/ui/button";
import { ArrowRight, User2, User2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();
  
  return (
      <div>
        <header className='p-5 sm:px-4 shadow-sm border-b-2 flex justify-between items-center'>
            <Image className="mx-4" src="logo.svg" alt="logo" width={70} height={50} />
            <div className="px-4  border-gray-300 border-l">
              <Link href='/dashboard' className="flex gap-3 items-center">
                <User2Icon size={16} />
                <span>Get Started</span>
              </Link>
            </div>
        </header>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10 flex flex-col items-center">
          <h2 className="text-center mx-auto font-bold text-6xl m-2">AI Powered Content Generator</h2>
          <p className="text-center mx-auto font-medium m-2">Revolutionize your content creation with our AI-powered app, delivering engaging and high-quality text in seconds.</p>
          <Button className="flex gap-2 mx-auto m-4" onClick={() => router.push("/dashboard")}>
            <span>Get Started</span> 
            <ArrowRight size={3}/>
          </Button>
        </div>
      </div>
  );
}