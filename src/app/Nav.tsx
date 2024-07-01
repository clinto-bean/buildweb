import React from "react"
import Image from "next/image"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu"
import SearchIcon from "../components/icons/search"
import { useTheme } from "./ThemeContext"

export default function Nav() {
  const { theme, toggleTheme } = useTheme()

  return (
    <header
      className='z-50 sticky top-0 flex items-center justify-between p-3 shadow-sm w-full'
      style={{ color: theme.text, backgroundColor: theme.accent }}>
      <Link className='size-8 overflow-hidden rounded-lg' href='#'>
        <button
          className='text-xs flex items-center justify-center h-full'
          onClick={() => {
            toggleTheme()
          }}>
          logo
        </button>
      </Link>
      <div className='relative flex-1 max-w-md max-md:hidden w-fit'>
        <SearchIcon />
        <Input
          className='w-full pl-10 text-sm'
          style={{ color: theme.bg, backgroundColor: "white" }}
          placeholder='Search products...'
          type='search'
        />
      </div>
      <nav className='flex items-center gap-4'>
        <DropdownMenu>
          <DropdownMenuTrigger
            className='flex items-center gap-1 font-medium hover:opacity-50 transition-all'
            style={{ color: theme.bg }}>
            Products
            <ChevronDownIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align='end'
            className='w-48'
            style={{ color: theme.bg, backgroundColor: theme.accent }}>
            <DropdownMenuItem>
              <Link href='/products/frontend'>Front End</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/products/backend'>Back End</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='/products/security'>Security</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          className='font-medium transition-all hover:opacity-50'
          href='/about'
          style={{ color: theme.bg }}>
          About
        </Link>
        <Link
          className='font-medium transition-all hover:opacity-50'
          href='#'
          style={{ color: theme.bg }}>
          Contact
        </Link>
      </nav>
    </header>
  )
}

function ChevronDownIcon() {
  return (
    <svg
      className='size-4'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='m6 9 6 6 6-6' />
    </svg>
  )
}
