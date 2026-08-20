'use client';

import axios from "axios";
import { ChartNoAxesCombined, HandCoins, Headset, Home, LibraryBig, LogOut, Megaphone, Settings, TrendingUp, User, UserPlus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const SideNav = () => {

    const pathname = usePathname();
    const router = useRouter();

    const logout = async () => {
        const url = "http://127.0.0.1:8000/api/logout";

        const token = localStorage.getItem('token');

        try {
            const response = await axios.post(url,{}, {
                headers: {
                     Authorization: `Bearer ${token}`,
                }
            });

            console.log(response.data);
            if (response.data.status === "success"){
                localStorage.clear();
                localStorage.removeItem('token');
                router.push("/");
            }
        } catch (error) {
            if (axios.isAxiosError(error)){
                console.log(error.response?.data);
            }
        }
    }

    return ( 
        <>
        <div className="w-full h-full">
                <div className="h-max w-full flex justify-center">
                    <div className="relative h-10 w-15">
                        <Image src="/logo.png" fill className="object-fill" alt="logo" />
                    </div>
                </div>
                <div className="h-max w-full flex flex-col gap-0.5 py-5 border-b border-grey">
                    <Link href="/dashboard" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/dashboard" ? "bg-primary text-accent" : "text-grey"}
                        `}>
                    <Home size={20} className="group-hover:text-accent" />
                    Dashboard</Link>
                    <Link href="/referrals" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/referrals" ? "bg-primary text-accent" : "text-grey"}
                        `}>
                    <UserPlus size={20} className="group-hover:text-accent" />
                    Referrals</Link>
                    <Link href="/earnings" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/earnings" ? "bg-primary text-accent" : "text-grey"}
                        `}>
                    <TrendingUp size={20} className="group-hover:text-accent" />
                    Earnings</Link>
                    <Link href="/payouts" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/payouts" ? "bg-primary text-accent" : "text-grey"}
                        `}>
                    <HandCoins size={20} className="group-hover:text-accent" />
                    Payouts</Link>
                    <Link href="/reports" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/reports" ? "bg-primary text-accent" : "text-grey"}
                        `}>
                    <ChartNoAxesCombined size={20} className="group-hover:text-accent" />
                    Reports</Link>
                    <Link href="/marketing-tools" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/marketing-tools" ? "bg-primary text-accent" : "text-grey"}
                        `}>
                    <Megaphone size={20} className="group-hover:text-accent" />
                    Marketing Tools</Link>
                    <Link href="/resources" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/resources" ? "bg-primary text-accent" : "text-grey"}
                        `}>
                    <LibraryBig size={20} className="group-hover:text-accent" />
                    Resources</Link>
                </div>
                <div className="h-max w-full flex flex-col gap-0.5 py-5">
                    <Link href="/profile" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/profile" ? "bg-primary text-accent" : "text-grey"}
                        `}>
                    <User size={20} className="group-hover:text-accent" />
                    Profile</Link>
                    <Link href="/settings" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/settings" ? "bg-primary text-accent" : "text-grey"}
                        `}>
                    <Settings size={20} className="group-hover:text-accent" />
                    Settings</Link>
                    <Link href="/support" className={`h-max w-full px-5 py-2 rounded flex items-center gap-3 hover:text-accent hover:bg-primary transition duration-300 group
                        ${pathname === "/support" ? "bg-primary text-accent" : "text-grey"}
                        `}>
                    <Headset size={20} className="group-hover:text-accent" />
                    Support</Link>
                </div>
                <div className="h-max w-full pt-10">
                    <button type="button" onClick={logout} className="h-max w-full px-5 py-2 rounded flex items-center gap-3 text-grey hover:text-accent hover:bg-danger transition duration-300 group">
                        <LogOut size={20} className="" />
                        Logout
                    </button>
                </div>
            </div>
        </>
     );
}
 
export default SideNav;