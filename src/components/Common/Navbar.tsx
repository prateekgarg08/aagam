import { FC } from 'react'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export const Navbar: FC<{}> = ({}) => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)
  return (
    <div className="sticky z-50 top-0 left-0 right-0 flex items-center justify-between bg-bgBlack text-orange  px-2 overflow-visible py-3">
      <div className="logo bg-bgBlack">
        <img
          src="/assets/logo/new.svg"
          alt=""
          width={150}
          height={100}
        />
      </div>
      <div className=" ">
        <div
          className="lg:hidden text-3xl"
          onClick={() => setIsMobileNavActive(true)}
        >
          <AiOutlineMenu color="white" />
        </div>
        <div
          className={`${
            isMobileNavActive ? 'flex' : 'hidden'
          } absolute w-full  top-0 text-orange left-0 z-10 flex-col space-y-5 text-xl h-full  py-2 lg:text-base lg:static items-center   lg:flex lg:flex-row lg:space-x-4 lg:space-y-0`}
        >
          <div className="lg:hidden text-2xl  text-white font-bold  w-full flex flex-row-reverse">
            <AiOutlineClose onClick={() => setIsMobileNavActive(false)} />
          </div>
          <a
            href="#"
            className="text-white"
          >
            Home
          </a>
          <a
            href="#"
            className="text-white"
          >
            Events
          </a>
          <a
            href="#"
            className="text-white"
          >
            Sponsors
          </a>
          <a
            href="#"
            className="text-white"
          >
            Contact Us
          </a>
          <button className="rounded-2xl bg-orange text-white px-3 py-1">
            Log in
          </button>
        </div>
      </div>
    </div>
  )
}
