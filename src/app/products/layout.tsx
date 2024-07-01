"use client"
import { ThemeProvider } from "@/app/ThemeContext"
import Link from "next/link"

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className='size-full relative flex justify-center items-center'>
      <Link
        href='/'
        className='fixed top-20 max-md:hidden left-4 bg-[#DDD] hover:bg-opacity-90 bg-opacity-40 rounded-md p-2 z-50'>
        Back
      </Link>
      {children}
    </div>
  )
}
