"use client";

import "./globals.css";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";
import SideNav from "@/components/user/SideNav";
import { usePathname } from "next/navigation";
import DashHeader from "@/components/user/DashHeader";

export default function RootLayout({ children }: LayoutProps<"/">) {

  const pathname = usePathname();

  return (
    <html lang="en" className={`h-full antialiased`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          integrity="sha512-pap2kZ7YHQyF..."
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <link rel="icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className="min-h-full w-screen flex flex-col">
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
      </body>
    </html>
  );
}
