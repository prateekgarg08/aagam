import Image from 'next/image'
import React from 'react'
import { FC } from 'react'

export const Sponsor: FC<{}> = ({}) => {
  return (
    <div className="w-full h-full  bg-black">
      <div className="w-full h-6 text-white text-3xl font-bold text-center">
        SPONSORS
      </div>
      <div className="flex w-full h-full sm:flex-col  sm:justify-center sm:align-center items-center xl:flex-row mt-14 esm:mt-2 ">
        <div className="w-1/3 h-1/4  flex justify-center items-center  sm:flex sm:justify-center sm:align-center sm:w-auto">
          <Image
            src="/image_1.png"
            alt="img"
            width={200}
            height={200}
          />
        </div>
        <div className="w-1/3 h-1/4 flex justify-center items-center sm:flex sm:justify-center sm:align-center sm:w-auto">
          <Image
            src="/image_2.png"
            alt="img"
            width={250}
            height={250}
          />
        </div>
        <div className="w-1/3 h-1/4 flex justify-center items-center sm:flex sm:justify-center sm:p-10 sm:align-center sm:w-auto">
          <Image
            src="/image_3.svg"
            alt="img"
            width={250}
            height={150}
          />
        </div>
      </div>
    </div>
  )
}
