import { FC } from 'react'
import React, { useState } from 'react'
import Image from 'next/image'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import { FaRegUserCircle } from 'react-icons/fa'
import { useRouter } from 'next/router'

export const Navbar: FC = () => {
  //? router
  const router = useRouter()

  //? states
  const [isMobileNavActive, setIsMobileNavActive] = useState(false)

  //? variables
  const routes = [
    {
      name: 'Home',
      url: '/',
    },
    {
      name: 'Events',
      url: '/events',
    },
  ]

  return (
    <div className="sticky z-50 top-0 left-0 right-0 flex items-center justify-between bg-bgBlack text-orange  px-2 overflow-visible py-3">
      <div className="logo bg-bgBlack">
        <Image
          src="/assets/logo/new.svg"
          alt=""
          width={150}
          height={100}
        />
      </div>
      <div className="flex gap-3 items-center">
        {routes.map((route) => {
          return (
            <Link
              key={route.name}
              href={route.url}
            >
              <span className="text-gray-400 hover:text-gray-50 duration-100 ">
                {route.name}
              </span>
            </Link>
          )
        })}
        <button
          onClick={() => {
            router.push('/login')
          }}
          className="flex items-center gap-3 font-semibold text-white rounded-full px-3 py-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary duration-300 transition-all"
        >
          <FaRegUserCircle className="h-6 w-6" />
          <span className="">Login</span>
        </button>
        <div
          className="lg:hidden text-3xl"
          onClick={() => setIsMobileNavActive(true)}
        >
          <AiOutlineMenu color="white" />
        </div>
        <div
          className={`${
            isMobileNavActive ? 'flex' : 'hidden'
          } absolute w-full h-full top-0 text-orange left-0 z-10 flex-col msm:bg-black space-y-5 text-xl  py-2 lg:text-base lg:static items-center  lg:flex lg:flex-row lg:space-x-4 lg:space-y-0`}
        >
          <div className="lg:hidden text-2xl bg-black  text-white font-bold  w-full flex flex-row-reverse">
            <AiOutlineClose onClick={() => setIsMobileNavActive(false)} />
          </div>
        </div>
      </div>
    </div>
  )
}
