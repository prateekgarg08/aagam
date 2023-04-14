import { FC } from 'react'
import React from 'react'
import { Event } from '../Events/Event'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/image'

type Im = {
  i1: string
  i2: string
}

export const HomeEvent = (props: Im) => {
  const router = useRouter()
  return (
    // <div className="flex lg:w-1/4 sm:w-1/2 esm:w-full m-4 h-large esm:h-60 sm:m-4  bg-white rounded-3xl xl:m-12 cursor-pointer sm:pb-6 xl:pb-3 sm:flex hover:-translate-y-4 duration-200  shadow-sxl border-red-100 border-2 shadow-orange-700 hover:pointer sm:justify-center sm:align-center md:w-1/2 ">
    //   <div className="flex-col w-full h-full sm:h-90 esm:h-50  rounded-t-3xl ">
    //     <div className="w-full h-2/3 rounded-t-3xl ">
    //       <Image
    //         src={props.i1}
    //         alt=""
    //         width={180}
    //         height="0"
    //         style={{ height: '100%', width: '100%' }}
    //         className="rounded-t-3xl  "
    //       />
    //     </div>
    //     <div className="w-full h-1 mt-6 esm:mt-2 ">
    //       <div className=" flex  items-center justify-center b  ">
    //         <div className="w-full h-full flex items-center justify-center">
    //           <div className="w-full pb-2 esm:pb-0 h-full text-black font-bold text-center md:text-3xl esm:text-xl sm:text-xl text-bold  ">
    //             <Link href="/events"> {props.i2}</Link>
    //           </div>
    //         </div>
    //       </div>
    //       <div className=" flex mb-4 items-center justify-center ">
    //         <div className="w-full h-full flex items-center justify-center">
    //           <div className="w-3/4 pb-2 rounded-lg bg-tertiary esm:text-xl font-bold esm:pb-0  h-full text-center text-3xl border-2 border-black ">
    //             <Link href="/register"> Register </Link>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="flex flex-col gap-7 bg-[#06191d] items-center h-96 w-80 shadow-2xl hover:shadow-xl duration-200 transition-all hover:shadow-primary/40 shadow-primary/40 rounded-lg">
      <div className="w-full h-3/4">
        <Image
          src={props.i1}
          width={1000}
          height={100}
          style={{ height: '100%', width: '100%' }}
          alt="event"
        />
      </div>
      <button
        onClick={() => {
          router.push('/events')
        }}
        className="bg-gradient-to-b from-primary to-secondary hover:opacity-95 flex items-end justify-center  text-gray-100 rounded px-5 py-2"
      >
        Register Now
      </button>
    </div>
  )
}
