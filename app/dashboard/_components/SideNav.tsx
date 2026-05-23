"use client";
import { FileClock, Home, Settings, WalletCards } from "lucide-react"
import Link from "next/link";
import { usePathname } from "next/navigation";
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

  return (
    <aside className="flex h-screen flex-col border-r border-gray-200 bg-white px-5 py-6">
        <Link href="/" className="flex items-center gap-3 px-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
                AI
            </div>
            <div>
                <p className="text-lg font-semibold leading-none">PromptStack</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                    Studio
                </p>
            </div>
        </Link>

        <div className="my-6 h-px bg-gray-200" />

        <nav className="space-y-2">
            {MenuList.map((menu, index) => {
                const Icon = menu.icon;
                const isActive = path === menu.path || (menu.path === "/dashboard" && path.startsWith("/dashboard/content"));

                return (
                    <Link
                        href={menu.path}
                        key={index}
                        className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                            isActive
                                ? "bg-black text-white"
                                : "text-gray-600 hover:bg-gray-100 hover:text-black"
                        }`}
                    >
                        <Icon className="h-5 w-5" />
                        <span>{menu.name}</span>
                    </Link>
                );
            })}
        </nav>
        <div className="mt-auto pt-6">
            <UsageTrack />
        </div>
    </aside>
  )
}

export default SideNav;
