import Image from 'next/image'
import React from 'react'
import { FC } from 'react'

//? images
import AboutImage from '../../../public/image.png'

export const About: FC<{}> = ({}) => {
  return (
    <div className="flex flex-col gap-16 bg-black mt-4">
      <h1 className="text-white text-5xl font-bold text-center">About</h1>
      <div className="grid grid-cols-5 items-center gap-10 px-12">
        <div className="col-span-2">
          <Image
            className="rounded-xl"
            src={AboutImage}
            alt="about"
          />
        </div>
        <span className="col-span-3 text-lg text-gray-300">
          Aagam, the cultural and technical festival of COLLEGE OF TECHNOLOGY
          AND ENGINEERING, UDAIPUR. It is a glorious rendition of the ideals of
          innovation, conception and determination to achieve heights of
          success, and is a phenomenal platform to nurture and inspire talent,
          while uniting a wide and diverse pool of participation under a single
          banner. The Aagam 2023 is poised to exceed all expectations in keeping
          with its strong heritage and excelling in it&apos;s core strength as a
          platform to drive talent and excellence. We look forward to having an
          enriching experience with all the participants. And yes, we promise
          the elegance, euphoria and entertainment !!
        </span>
      </div>
    </div>
  )
}
