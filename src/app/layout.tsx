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
          `relative h-[100dvh] max-h-[100dvh] max-w-[100dvw] w-[100dvw] overflow-hidden` +
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
