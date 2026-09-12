'use client';

import Header from "./general/Header";
import Footer from "./general/Footer";
import { usePathname } from "next/navigation";
import SideNav from "./user/SideNav";
import DashHeader from "./user/DashHeader";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <Header />
        <div className={`w-full flex
            ${pathname === "/" ? "h-max" : "h-screen overflow-hidden"}
          `}>
          <div className={`w-2/10 h-screen px-10 py-10 border-r border-grey
            ${pathname === "/" || pathname === "/login" || pathname === "/register" || pathname === "/forget-password" ? "hidden" : ""}
            `}>
            <SideNav />
          </div>
          <div className={`
            ${pathname === "/" || pathname === "/login" || pathname === "/register" || pathname === "/forget-password" ? "w-full h-max" : "w-8/10 h-screen"}
            `}>
            <div className={`w-full h-20 border-b border-grey px-5
              ${pathname === "/" ? "hidden" : ""}
              ${pathname === "/login" ? "hidden" : ""}
              ${pathname === "/register" ? "hidden" : ""}
              ${pathname === "/forget-password" ? "hidden" : ""}
            `}>
              <DashHeader />
            </div>
            <div className={`w-full 
              ${pathname === "/" ? "h-max" : "overflow-y-scroll h-full"}
              `}>
              {children}
            </div>
          </div>
        </div>
        <Footer />
    </>
  );
}