'use client';

import Image from "next/image";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

const Header = () => {

    const pathname = usePathname();

    return ( 
        <>
        <header className={`h-20 w-full px-10 flex justify-between items-center
            ${pathname === "/" ? "" : "hidden"}
            `}>
            <div className="h-max w-max">
                <div className="relative h-10 w-15">
                    <Image src="/logo.png" fill className="object-fill" alt="logo" />
                </div>
            </div>
            <div className="h-max w-max flex gap-3 items-center">
                <Link href={"/login"} className="bg-primary px-5 py-2 rounded text-background">Login</Link>
                <Link href={"/register"} className="border border-primary px-5 py-2 rounded text-primary">Register</Link>              
            </div>
        </header>
        </>
     );
}
 
export default Header;