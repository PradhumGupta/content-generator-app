"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react"
import Image from "next/image"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import UsageTrack from "./UsageTrack";

function SideNav() {

    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/settings'
        }
    ]

    const path = usePathname();
    useEffect(() => {
        console.log(path);
    }, []);

  return (
    <div className="max-w-3xl h-screen relative p-5 shadow-sm border">
        <div className="flex justify-center">
            <Image src={'./logo.svg'} alt="logo" width={60} height={50} />
        </div>

        <hr className="my-6 border" />

        <div className="mt-4">
            {MenuList.map((menu, index) => (
                <div key={index} className={`flex gap-2 mb-2 p-3
                    hover:bg-primary hover:text-white rounded-lg
                    cursor-pointer items-center
                    ${path == menu.path && 'bg-primary text-white'}
                `}>
                    <Link href={menu.path} className="flex gap-2">
                        <menu.icon className="h-6 w-6" />
                        <h2 className="text-lg">{menu.name}</h2>
                    </Link>
                </div>
            ))}
        </div>
        <div className="absolute bottom-10 left-0 w-full">
            <UsageTrack />
        </div>
    </div>
  )
}

export default SideNav;