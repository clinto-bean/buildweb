import Image from "next/image"
import React from "react"
import backdrop from "./backdrop.avif"

type Props = {}

function page({}: Props) {
  return (
    <section
      id='frontend'
      className='flex items-center justify-center relative w-full h-full'>
      <p>s</p>
      <Image src={backdrop} fill={true} className='opacity-50 -z-50' alt='' />
    </section>
  )
}

export default page
