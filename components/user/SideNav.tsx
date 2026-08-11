'use client';

import { ChartNoAxesCombined, HandCoins, Headset, Home, LibraryBig, LogOut, Megaphone, Settings, TrendingUp, User, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideNav = () => {

    const pathname = usePathname();

    return ( 
        <>
        <div className="w-full h-full">
                <div className="h-max w-full flex justify-center">
                    <div className="relative h-10 w-15">
                        <Image src="/logo.png" fill className="object-fill" alt="logo" />
                    </div>
                </div>
                <div className="h-max w-full py-5 border-b border-grey">
                    <Link href="/dashboard" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/dashboard" ? "bg-primary text-accent" : "text-text"}
                        `}>
                    <Home size={20} className="group-hover:text-accent" />
                    Dashboard</Link>
                    <Link href="/referrals" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/referrals" ? "bg-primary text-accent" : "text-text"}
                        `}>
                    <UserPlus size={20} className="group-hover:text-accent" />
                    Referrals</Link>
                    <Link href="/earnings" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/earnings" ? "bg-primary text-accent" : "text-text"}
                        `}>
                    <TrendingUp size={20} className="group-hover:text-accent" />
                    Earnings</Link>
                    <Link href="/payouts" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/payouts" ? "bg-primary text-accent" : "text-text"}
                        `}>
                    <HandCoins size={20} className="group-hover:text-accent" />
                    Payouts</Link>
                    <Link href="/reports" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/reports" ? "bg-primary text-accent" : "text-text"}
                        `}>
                    <ChartNoAxesCombined size={20} className="group-hover:text-accent" />
                    Reports</Link>
                    <Link href="/marketing-tools" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/marketing-tools" ? "bg-primary text-accent" : "text-text"}
                        `}>
                    <Megaphone size={20} className="group-hover:text-accent" />
                    Marketing Tools</Link>
                    <Link href="/resources" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/resources" ? "bg-primary text-accent" : "text-text"}
                        `}>
                    <LibraryBig size={20} className="group-hover:text-accent" />
                    Resources</Link>
                </div>
                <div className="h-max w-full py-5">
                    <Link href="/profile" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/profile" ? "bg-primary text-accent" : "text-text"}
                        `}>
                    <User size={20} className="group-hover:text-accent" />
                    Profile</Link>
                    <Link href="/settings" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/settings" ? "bg-primary text-accent" : "text-text"}
                        `}>
                    <Settings size={20} className="group-hover:text-accent" />
                    Settings</Link>
                    <Link href="/support" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/support" ? "bg-primary text-accent" : "text-text"}
                        `}>
                    <Headset size={20} className="group-hover:text-accent" />
                    Support</Link>
                </div>
                <div className="h-max w-full pt-10">
                    <button className="h-max w-full px-5 py-2 rounded flex items-center gap-3 text-text hover:text-accent hover:bg-danger transition duration-300 group">
                        <LogOut size={20} className="" />
                        Logout
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default SideNav;