import React from 'react'
import { FC } from 'react'

export const Sponsor: FC<{}> = ({}) => {
  return (
    <div className="w-full h-full  bg-black">
      <div className="w-full h-6 text-white text-3xl text-center">SPONSORS</div>
      <div className="flex w-full h-full sm:flex-col  sm:justify-center sm:align-center  xl:flex-row mt-14 ">
        <div className="w-1/3 h-1/3 p-20 sm:flex sm:justify-center sm:align-center sm:w-auto">
          <img
            src="image_1.png"
            alt="img"
          ></img>
        </div>
        <div className="w-1/3 h-1/3 p-20 sm:flex sm:justify-center sm:align-center sm:w-auto ">
          <img
            src="image_2.png"
            alt="img"
          ></img>
        </div>
        <div className="w-1/3 h-1/3 p-20 sm:flex sm:justify-center sm:align-center sm:w-auto">
          <img
            src="image_3.svg"
            alt="img"
          ></img>
        </div>
      </div>
    </div>
  )
}
