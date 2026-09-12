import "./globals.css";
import AppShell from "@/components/AppShell";

export default function RootLayout({ children }: LayoutProps<"/">) {

  return (
    <html lang="en" className={`h-full antialiased`}>
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" integrity="sha512-pap2kZ7YHQyF..." crossOrigin="anonymous" referrerPolicy="no-referrer" />
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="min-h-full w-screen flex flex-col">
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
