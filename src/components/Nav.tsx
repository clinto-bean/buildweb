import React from "react"

import Link from "next/link"
import { Input } from "@/components/ui/input"
import {
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu"
import SearchIcon from "./icons/search"

export default function Nav() {
  return (
    <header className='flex items-center justify-between px-4 py-3 bg-white shadow-sm dark:bg-gray-900 w-full'>
      <Link
        className='flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50'
        href='#'>
        <ShoppingBagIcon />
        <span>BuildWeb</span>
      </Link>
      <div className='relative flex-1 max-w-md'>
        <SearchIcon />
        <Input
          className='w-full rounded-md bg-gray-100 pl-10 pr-4 py-2 text-sm focus:bg-white focus:outline-none dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400'
          placeholder='Search products...'
          type='search'
        />
      </div>
      <nav className='hidden md:flex items-center gap-4'>
        <DropdownMenu>
          <DropdownMenuTrigger className='flex items-center gap-1 font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'>
            Categories
            <ChevronDownIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' className='w-48'>
            <DropdownMenuItem>
              <Link href='#'>Front End</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='#'>Back End</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link href='#'>Security</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <Link
          className='font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
          href='#'>
          About
        </Link>
        <Link
          className='font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50'
          href='#'>
          Contact
        </Link>
      </nav>
    </header>
  )
}

function ChevronDownIcon() {
  return (
    <svg
      className='h-4 w-4'
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

function ShoppingBagIcon() {
  return (
    <svg
      className='flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-50'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'>
      <path d='M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z' />
      <path d='M3 6h18' />
      <path d='M16 10a4 4 0 0 1-8 0' />
    </svg>
  )
}
