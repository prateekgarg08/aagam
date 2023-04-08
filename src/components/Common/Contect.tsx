import Image from 'next/image'
import { FC } from 'react'
import { FaPhone } from 'react-icons/fa'

export const Contect: FC<{}> = ({}) => {
  return (
    <div className="w-full h-full">
      <div className="absolute top-12 left-10">
        <div className="-mt-2 h-17 cursor-pointer">
          <Image
            src="/image_1.png"
            alt="img"
            width={100}
            height={100}
          />
        </div>
      </div>
      <div className="flex justify-center ">
        <div className="-mt-5 h-35 cursor-pointer hover:-translate-y-5">
          <Image
            src="/image_1.png"
            alt="img"
            width={100}
            height={100}
          />

          <div className="flex justify-center items-center text-center text-3xl  text-white ">
            Janak
          </div>
          <div className="flex justify-center items-center text-center text-3xl  text-white ">
            <div className="pr-4 rotate-90">
              <FaPhone />
            </div>
            567483093
          </div>
        </div>
      </div>
    </div>
  )
}
