import { FC } from 'react'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

type Im = {
  n1: string
  n2: string
  n3: string
  n4: string
  n5: string
  n6: string
}
export const Navbar = (props: Im) => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)
  return (
    <div className=" flex items-center justify-between bg-bgBlack text-orange  px-2 overflow-visible ">
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
          } absolute w-full h-full top-0 text-orange left-0 z-10 flex-col msm:bg-black lg:bg-none space-y-5 text-xl  py-2 lg:text-base lg:static items-center  lg:flex lg:flex-row lg:space-x-4 lg:space-y-0`}
        >
          <div className="lg:hidden text-2xl  text-white font-bold  w-full flex flex-row-reverse">
            <AiOutlineClose onClick={() => setIsMobileNavActive(false)} />
          </div>
          <a
            href="#"
            className="text-white"
          >
            {props.n1}
          </a>
          <a
            href="#"
            className="text-white"
          >
            {props.n2}
          </a>
          <a
            href="#"
            className="text-white"
          >
            {props.n3}
          </a>
          <a
            href="#"
            className="text-white"
          >
            {props.n4}
          </a>
          <a
            href="#"
            className="text-white"
          >
            {props.n5}
          </a>
          <button className="rounded-2xl bg-orange text-white px-3 py-1">
            {props.n6}
          </button>
        </div>
      </div>
    </div>
  )
}
