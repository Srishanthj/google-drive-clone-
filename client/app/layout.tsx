"use client"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css';
import {cn} from "@/lib/utils";
import {useProfile} from "@/hooks/use-profile-store";
import {ModalProviders} from "@/components/providers/modal-provider";
import {ThemeProvider} from "@/components/providers/theme-provider";
import {useEffect} from "react";
import {Toaster} from "react-hot-toast";

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Create Next App',
//   description: 'Generated by create next app',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const {getUser} = useProfile();

    useEffect(() => {
        getUser();
    }, []);



  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <ThemeProvider
            attribute={"class"}
            defaultTheme={"light"}
            storageKey={"react-file-manager-theme"}
            enableSystem={true}
        >
        <ModalProviders />
            <Toaster
                position="top-center"
                reverseOrder={true}
            />
        {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
