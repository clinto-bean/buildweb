"use client"

import Image from "next/image"
import React from "react"
import { useTheme } from "../../ThemeContext"
import backdrop from "./backdrop.avif"
import Link from "next/link"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function Page(): JSX.Element {
  const { theme } = useTheme()
  return (
    <div
      className={`flex flex-col min-h-[100dvh] relative`}
      style={{ color: theme.text, backgroundColor: theme.bg }}>
      <main className='flex-1'>
        <section
          id='hero'
          className='w-full py-12 md:py-24 lg:py-32 border-b'
          style={{ backgroundColor: theme.bg, color: theme.text }}>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]'>
              <Image
                src={backdrop}
                width='550'
                height='550'
                alt='Hero'
                className='mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square'
                loading='lazy'
              />
              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <div className='flex flex-col'>
                    <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none flex-1'>
                      Elevate Your Web Presence with Our Front-End Solutions
                    </h1>
                  </div>
                  <p
                    className='max-w-[600px] md:text-xl'
                    style={{ color: theme.accent }}>
                    Discover our cutting-edge web development products and
                    services to take your online business to new heights.
                  </p>
                </div>
                <div className='flex flex-col gap-2 min-[400px]:flex-row'>
                  <Link
                    href='#products'
                    className='inline-flex h-10 items-center justify-center rounded-md px-8 text-sm font-medium shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                    style={{
                      backgroundColor: theme.accent,
                      color: theme.bg,
                    }}
                    prefetch={false}>
                    Explore Products
                  </Link>
                  <Link
                    href='#'
                    className='transition-all hover:bg-slate-900 inline-flex h-10 items-center justify-center rounded-md border border-input px-8 text-sm font-medium shadow-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50'
                    prefetch={false}>
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id='products'
          className='w-full py-12 md:py-24 lg:py-32 border-b'
          style={{ backgroundColor: theme.accent, color: theme.bg }}>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  Our Featured Products
                </h2>
                <p className='max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Explore our diverse range of front-end web development
                  products, each designed to enhance your online presence and
                  user experience.
                </p>
              </div>
            </div>
            <div
              className='mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12'
              style={{ color: theme.neutral }}>
              <div
                className='flex hover:bg-opacity-90 flex-col items-start space-y-2 rounded-lg bg-background p-4 shadow-sm transition-colors hover:bg-muted border drop-shadow-md'
                style={{
                  backgroundColor: theme.bg,
                  color: theme.accent,
                  borderColor: theme.muted,
                }}>
                <Image
                  src={backdrop}
                  width='300'
                  height='200'
                  alt='Product'
                  className='mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center'
                />
                <h3 className='text-xl font-bold'>Customizable Themes</h3>
                <p>
                  Personalize your website with our extensive library of
                  customizable themes and design elements.
                </p>
              </div>
              <div
                className='flex hover:bg-opacity-90 flex-col items-start space-y-2 rounded-lg bg-background p-4 shadow-sm transition-colors hover:bg-muted border drop-shadow-md'
                style={{
                  backgroundColor: theme.bg,
                  color: theme.accent,
                  borderColor: theme.muted,
                }}>
                <Image
                  src={backdrop}
                  width='300'
                  height='200'
                  alt='Product'
                  className='mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center'
                />
                <h3 className='text-xl font-bold'>Customizable Themes</h3>
                <p>
                  Personalize your website with our extensive library of
                  customizable themes and design elements.
                </p>
              </div>
              <div
                className='flex hover:bg-opacity-90 flex-col items-start space-y-2 rounded-lg bg-background p-4 shadow-sm transition-colors hover:bg-muted border drop-shadow-md'
                style={{
                  backgroundColor: theme.bg,
                  color: theme.accent,
                  borderColor: theme.muted,
                }}>
                <Image
                  src={backdrop}
                  width='300'
                  height='200'
                  alt='Product'
                  className='mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center'
                />
                <h3 className='text-xl font-bold'>Customizable Themes</h3>
                <p>
                  Personalize your website with our extensive library of
                  customizable themes and design elements.
                </p>
              </div>
              <div
                className='flex hover:bg-opacity-90 flex-col items-start space-y-2 rounded-lg bg-background p-4 shadow-sm transition-colors hover:bg-muted border drop-shadow-md'
                style={{
                  backgroundColor: theme.bg,
                  color: theme.accent,
                  borderColor: theme.muted,
                }}>
                <Image
                  src={backdrop}
                  width='300'
                  height='200'
                  alt='Product'
                  className='mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center'
                />
                <h3 className='text-xl font-bold'>Customizable Themes</h3>
                <p>
                  Personalize your website with our extensive library of
                  customizable themes and design elements.
                </p>
              </div>
              <div
                className='flex hover:bg-opacity-90 flex-col items-start space-y-2 rounded-lg bg-background p-4 shadow-sm transition-colors hover:bg-muted border drop-shadow-md'
                style={{
                  backgroundColor: theme.bg,
                  color: theme.accent,
                  borderColor: theme.muted,
                }}>
                <Image
                  src={backdrop}
                  width='300'
                  height='200'
                  alt='Product'
                  className='mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center'
                />
                <h3 className='text-xl font-bold'>Customizable Themes</h3>
                <p>
                  Personalize your website with our extensive library of
                  customizable themes and design elements.
                </p>
              </div>
              <div
                className='flex hover:bg-opacity-90 flex-col items-start space-y-2 rounded-lg bg-background p-4 shadow-sm transition-colors hover:bg-muted border drop-shadow-md'
                style={{
                  backgroundColor: theme.bg,
                  color: theme.accent,
                  borderColor: theme.muted,
                }}>
                <Image
                  src={backdrop}
                  width='300'
                  height='200'
                  alt='Product'
                  className='mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center'
                />
                <h3 className='text-xl font-bold'>Customizable Themes</h3>
                <p>
                  Personalize your website with our extensive library of
                  customizable themes and design elements.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          className='w-full py-12 md:py-24 lg:py-32 backdrop-opacity-90 border-y'
          style={{ backgroundColor: theme.bg, color: theme.text }}>
          <div className='container px-4 md:px-6'>
            <div className='flex flex-col items-center justify-center space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                  What Our Customers Say
                </h2>
                <p className='max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Hear from our satisfied customers about how our front-end
                  solutions have transformed their online presence.
                </p>
              </div>
              <div className='mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 md:grid-cols-3 lg:gap-12'>
                <div
                  className='flex flex-col space-y-4 rounded-lg p-6 shadow-sm drop-shadow-md border'
                  style={{
                    backgroundColor: theme.accent,
                    color: theme.bg,
                    borderColor: theme.accent,
                  }}>
                  <blockquote>
                    &quot;The responsive layouts and interactive components from
                    this company have been a game-changer for our website. Our
                    users love the seamless experience.&quot;
                  </blockquote>
                  <div className='flex items-center space-x-4 px-2 py-1 rounded-md'>
                    <Avatar style={{ color: theme.text }}>
                      <AvatarImage src='/placeholder-user.jpg' />
                      <AvatarFallback style={{ backgroundColor: theme.bg }}>
                        JD
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className='text-sm font-semibold'>John Doe</h4>
                      <p className='text-xs'>CEO, Acme Inc.</p>
                    </div>
                  </div>
                </div>
                <div
                  className='flex flex-col space-y-4 rounded-lg p-6 shadow-sm drop-shadow-md border'
                  style={{
                    backgroundColor: theme.accent,
                    color: theme.bg,
                    borderColor: theme.accent,
                  }}>
                  <blockquote>
                    &quot;The performance optimization tools have made a huge
                    difference in our website&apos;s load times. Our customers
                    appreciate the lightning-fast experience.&quot;
                  </blockquote>
                  <div className='flex items-center space-x-4 px-2 py-1 rounded-md'>
                    <div style={{ color: theme.accent }}>
                      <Avatar style={{ color: theme.text }}>
                        <AvatarImage src='/placeholder-user.jpg' />
                        <AvatarFallback style={{ backgroundColor: theme.bg }}>
                          JS
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h4 className='text-sm font-semibold'>Jane Smith</h4>
                      <p className='text-xs'>CTO, Acme Inc.</p>
                    </div>
                  </div>
                </div>
                <div
                  className='flex flex-col space-y-4 rounded-lg p-6 shadow-sm drop-shadow-md border'
                  style={{
                    backgroundColor: theme.accent,
                    color: theme.bg,
                    borderColor: theme.accent,
                  }}>
                  <blockquote>
                    &quot;The accessibility features have made our website
                    inclusive, usable and welcoming to all users. We&apos;re
                    proud to offer an exceptional experience.&quot;
                  </blockquote>
                  <div className='flex items-center space-x-4 px-2 py-1 rounded-md'>
                    <div style={{ color: theme.accent }}>
                      <Avatar style={{ color: theme.text }}>
                        <AvatarImage src='/placeholder-user.jpg' />
                        <AvatarFallback style={{ backgroundColor: theme.bg }}>
                          BA
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div>
                      <h4 className='text-sm font-semibold'>Billy Anders</h4>
                      <p className='text-xs'>Head of Design, Acme Inc.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          className='w-full py-12 md:py-24 lg:py-32 border-t'
          style={{ backgroundColor: theme.accent, color: theme.bg }}>
          <div className='container px-4 md:px-6'>
            <div className='mx-auto max-w-2xl space-y-4 text-center'>
              <div className='space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter md:text-4xl/tight'>
                  Stay Updated on Our Latest Offerings
                </h2>
                <p className='md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed'>
                  Subscribe to our newsletter to receive updates on our
                  front-end web development products and services.
                </p>
              </div>
              <form className='flex gap-2'>
                <Input
                  type='email'
                  placeholder='Enter your email'
                  className='max-w-lg flex-1'
                />
                <Button type='submit'>Subscribe</Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
        <p className='text-xs text-muted-foreground'>
          &copy; 2024 Buildweb. All rights reserved.
        </p>
        <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
          <Link
            href='#'
            className='text-xs hover:underline underline-offset-4'
            prefetch={false}>
            Terms of Service
          </Link>
          <Link
            href='#'
            className='text-xs hover:underline underline-offset-4'
            prefetch={false}>
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}
