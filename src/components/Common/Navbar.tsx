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
    {
      name: 'contact us',
      url: 'events',
    },
  ]
  const clickHandler = () => {
    setIsMobileNavActive(!isMobileNavActive)
  }
  return (
    <div className="sticky z-50 top-0 left-0 right-0 flex items-center justify-between bg-bgBlack text-orange overflow-visible ">
      <div className="logo bg-bgBlack">
        <Image
          src="/logo.png"
          alt=""
          width={150}
          height={100}
          onClick={() => {
            router.push('/')
          }}
        />
      </div>
      <div className="flex gap-3 items-center mr-4 ">
        {routes.map((route) => {
          return (
            <Link
              key={route.name}
              href={route.url}
            >
              <span className="hidden smm:block text-gray-400 hover:text-gray-50 duration-100 ">
                {route.name}
              </span>
            </Link>
          )
        })}
        <button
          onClick={() => {
            router.push('/register')
          }}
          className=" items-center gap-3 font-semibold hidden smm:block  text-gray-400 rounded-full px-3 py-2 bg-gradient-to-r  smm:from-primary smm:to-secondary hover:from-secondary hover:to-primary duration-300 transition-all"
        >
          <span className="">Register</span>
        </button>
      </div>

      {isMobileNavActive ? (
        <div className="bg-black h-full w-screen">
          <AiOutlineClose
            className=" text-2xl  text-white "
            onClick={clickHandler}
          />
          <div className="w-screen h-screen flex items-center justify-center">
            <div className="flex flex-col gap-3 items-center mr-4 ">
              {routes.map((route) => {
                return (
                  <Link
                    key={route.name}
                    href={route.url}
                  >
                    <span
                      className=" text-gray-400 hover:text-gray-50 duration-100 "
                      onClick={clickHandler}
                    >
                      {route.name}
                    </span>
                  </Link>
                )
              })}
              <button
                onClick={() => {
                  router.push('/register')
                }}
                className=" items-center gap-3 font-semibold  text-gray-400 rounded-full px-3 py-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary duration-300 transition-all"
              >
                <span className="">Register</span>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <AiOutlineMenu
          className="block smm:hidden text-2xl mr-4  text-white"
          onClick={clickHandler}
        />
      )}
    </div>
  )
}
