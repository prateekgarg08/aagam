import Image from 'next/image'
import React from 'react'
import { FC } from 'react'

//? images
import AboutImage from '../../../public/image.png'

export const About: FC<{}> = ({}) => {
  return (
    <div className="w-full h-full bg-black mt-8">
      <h1 className="text-white text-3xl font-bold text-center">About</h1>
      <div className=" p-12 flex items-center gap-4 sm:flex-col xl:flex-row">
        <div className="w-1/2 sm:w-full sm:h-30 xl:h-96  sm: flex sm:justify-center sm:align-center p-2 ">
          <Image
            className="rounded-xl"
            src={AboutImage}
            alt="about"
          />
        </div>
        <div className="w-1/2  lg:flex gap-3 sm:w-full lg:pl-6 lg:pr-6 flex justify-center items-center  lg:text-xl esm:text-sm sm:text-md text-gray-400 sm:py-12 xl:py-2">
          <div className=" lg:text-xl esm:text-sm sm:text-md text-gray-400 ">
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
    </div>
  )
}
