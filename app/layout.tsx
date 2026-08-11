import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/general/Header";
import Footer from "@/components/general/Footer";

export const metadata: Metadata = {
  title: "IruHost",
  description: "IruHost Affiliate Program",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
        <link rel="shortcut icon" href="/logo.png" type="image/x-icon" />
      </head>
      <body className="min-h-full w-screen flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
