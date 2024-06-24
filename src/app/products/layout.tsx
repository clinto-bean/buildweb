"use client"
import { ThemeProvider } from "@/app/ThemeContext"
import Link from "next/link"
import { ReactNode } from "react"

interface Props {
  children?: ReactNode
}

export default function ProductsLayout(children: Props["children"]) {
  return (
    <div className='size-full relative flex justify-center items-center'>
      <Link
        href='/'
        className='absolute top-24 left-8 bg-white rounded-md p-2 z-50'>
        Back
      </Link>
      {children}
    </div>
  )
}
