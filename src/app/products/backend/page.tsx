import React from "react"
import Image from "next/image"
import backdrop from "./backdrop.avif"
type Props = {}

function page({}: Props) {
  return (
    <section
      id='backend'
      className='flex items-center justify-center relative w-full h-full'>
      backend
      <Image src={backdrop} fill={true} className='opacity-80 -z-50' alt='' />
    </section>
  )
}

export default page
