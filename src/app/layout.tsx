"use client"
import { ThemeProvider } from "@/app/ThemeContext"

import { Inter } from "next/font/google"
import "./globals.css"
import Nav from "@/app/Nav"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <title>Build Web</title>
      <body
        className={
          `relative bg-cover h-full max-h-[100svh] max-w-[100dvw] overflow-hidden` +
          inter.className
        }>
        <ThemeProvider>
          <Nav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
