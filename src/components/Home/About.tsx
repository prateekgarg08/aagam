import React from 'react'
import { FC } from 'react'

export const About: FC<{}> = ({}) => {
  return (
    <div className="w-full h-full bg-black mt-4">
      <h1 className="text-white text-3xl font-bold text-center">About fest</h1>
      <div className=" p-12 flex sm:flex-col xl:flex-row">
        <div className="w-1/2 sm:w-full sm:h-30 xl:h-96  sm: flex sm:justify-center sm:align-center p-2 ">
          <img
            className="rounded-xl"
            src="image.png"
            alt="pic"
          ></img>
        </div>
        <div className="w-1/2 sm:w-full xl:h-96 sm:h-30  sm:text-md xl:text-2xl text-white sm:py-12 xl:py-2">
          Aagam, the cultural and technical festival of COLLEGE OF TECHNOLOGY
          AND ENGINEERING, UDAIPUR. It is a glorious rendition of the ideals of
          innovation, conception and determination to achieve heights of
          success, and is a phenomenal platform to nurture and inspire talent,
          while uniting a wide and diverse pool of participation under a single
          banner. The Aagam 2023 is poised to exceed all expectations in keeping
          with its strong heritage and excelling in it's core strength as a
          platform to drive talent and excellence. We look forward to having an
          enriching experience with all the participants. And yes, we promise
          the elegance, euphoria and entertainment !!
        </div>
      </div>
    </div>
  )
}
