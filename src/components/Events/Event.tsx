import { FC } from 'react'
import Link from 'next/link'
type Im = {
  i1: string
  i2: string
}
export const Event = (props: Im) => {
  return (
    <div className="flex w-1/4 sm:w-1/2 esm:w-full m-4 h-extra esm:h-96 sm:m-4  bg-white   rounded-3xl xl:m-12 sm:pb-6 xl:pb-3 sm:flex hover:-translate-y-4 sm:justify-center sm:align-center ">
      <div className="flex-col w-full h-full sm:h-90  ">
        <div className="w-full h-3/4 bg-black">
          <img
            src={props.i1}
            className="h-full w-full"
          ></img>
        </div>
        <div className="w-full h-1 ">
          <div className=" flex m-4 items-center justify-center b  ">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-full pb-2 esm:pb-0 h-full text-black font-bold text-center md:text-3xl esm:text-xl sm:text-xl text-bold  ">
                <Link href="/events"> {props.i2}</Link>
              </div>
            </div>
          </div>
          <div className=" flex mb-4  items-center justify-center ">
            <div className="w-full h-full flex items-center justify-center">
              <div className="w-3/4 pb-2 rounded-lg bg-tertiary esm:text-xl font-bold esm:pb-0  h-full text-center text-3xl border-2 border-black ">
                Register
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
