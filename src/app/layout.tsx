import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';



import AppProvider from "../z-old-components/AppContext";
import { AppContext } from "@/context/AppContext";

import AppContextProvider from "../context/AppContext";
// import { Providers } from "./2en/provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Dev Service",
  description: "Web Dev Service",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // if (!routing.locales.includes(locale as any)) {
  //   notFound();
  // }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2595619116828936"
     crossorigin="anonymous"></script>


        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        ></link>
        
      </head>

      <AppProvider>
        <body
          className={`${inter.className} max-w-full mx-auto sm:max-w-[95%] md:max-w-[90%] xl:max-w-[85%] relative `}
        >
          <AppContextProvider>
            {/* 
          <Navbar />
          <Footer />
          <PopupWidget />
          */}

            <Providers>
              <div>{children}</div>
            </Providers>
          </AppContextProvider>
        </body>
      </AppProvider>
    </html>
  );
}
