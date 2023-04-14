import Image from 'next/image'
import React from 'react'
import { FC } from 'react'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Footer } from '@/components/Home/Footer'
import { Navbar } from '@/components/Common/Navbar'

const inter = Inter({ subsets: ['latin'] })

export default function about() {
  return (
    <>
      <Head>
        <title>Aagam</title>
        <meta
          name="description"
          content="Colleg"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Navbar />
      <div className="w-full h-full bg-black ">
        <h1 className="text-white text-3xl font-bold text-center">About</h1>
        <div className=" p-12 flex items-center gap-4 sm:flex-col xl:flex-row">
          <div className="w-1/2 sm:w-full sm:h-30 xl:h-96 sm:flex sm:justify-center sm:align-center p-2 ">
            <Image
              className="rounded-xl "
              src="/image.png"
              width="500"
              height={100}
              alt="about"
            />
          </div>
          <div className="w-1/2 lg:w-1/3 lg:flex gap-3 sm:w-full  lg:text-xl esm:text-sm sm:text-md text-gray-400 sm:py-12 xl:py-2">
            Aagam, the cultural and technical festival of COLLEGE OF TECHNOLOGY
            AND ENGINEERING, UDAIPUR. It is a glorious rendition of the ideals
            of innovation, conception and determination to achieve heights of
            success, and is a phenomenal platform to nurture and inspire talent,
            while uniting a wide and diverse pool of participation under a
            single banner. The Aagam 2023 is poised to exceed all expectations
            in keeping with its strong heritage and excelling in it&apos;s core
            strength as a platform to drive talent and excellence. We look
            forward to having an enriching experience with all the participants.
            And yes, we promise the elegance, euphoria and entertainment !!
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
