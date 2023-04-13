import { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'
type Im = {
  i1: string
  i2: string
  i3: string
}
export const Event = (props: Im) => {
  return (
    <div className="flex lg:w-1/4 sm:w-1/2 esm:w-full m-4 h-1/3 esm:h-60 sm:m-4  bg-white rounded-3xl xl:m-12 cursor-pointer sm:pb-6 xl:pb-3 sm:flex hover:-translate-y-4 duration-200  shadow-sxl border-red-100 border-2 shadow-orange-700 hover:pointer sm:justify-center sm:align-center md:w-1/2 ">
      <div className="flex-col w-full h-fit sm:h-90 esm:h-60  rounded-t-3xl ">
        <div className="w-full h-2/3 rounded-t-3xl ">
          <Image
            src={props.i1}
            alt=""
            width={180}
            height="0"
            style={{ height: '100%', width: '100%' }}
            className="rounded-t-3xl  "
          />
        </div>
        <div className="w-full h-1 ">
          <div className=" flex  items-center justify-center b  ">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full pb-2 esm:pb-0 h-full text-black font-bold text-center md:text-3xl esm:text-xl sm:text-xl text-bold  ">
                {props.i2}
              </div>
            </div>
          </div>
          <div className=" flex mb-4 items-center justify-center ">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-3/4 pb-2 rounded-lg bg-tertiary esm:text-xl font-bold esm:pb-0  h-full text-center text-3xl border-2 border-black ">
                <Link href={props.i3}> Register </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
