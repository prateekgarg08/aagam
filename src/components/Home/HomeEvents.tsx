import { FC } from 'react'
import React from 'react'
import { Event } from '../Events/Event'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const HomeEvents: FC<{}> = ({}) => {
  const routes = [
    {
      name: 'Technical',
      img: '/thunt.jpeg',
      url: '/events',
    },
    {
      name: 'Cultural',
      img: '/thunt.jpeg',
      url: '/events',
    },
    {
      name: 'Art & Craft',
      img: '/thunt.jpeg',
      url: '/events',
    },
    {
      name: 'Novelty',
      img: '/thunt.jpeg',
      url: '/events',
    },
    {
      name: 'Compitition',
      img: '/thunt.jpeg',
      url: '/events',
    },
  ]
  return (
    <div
      className=" h-full w-full
     bg-black p-4 "
    >
      <div className="text-center text-3xl text-white font-bold mt-4 ">
        Events
      </div>
      <div className="flex flex-col items-center w-full h-1/2 xl:flex xl:flex-wrap p-5 xl:flex-row esm:flex esm:flex-col esm:items-center">
        {routes.map((route) => {
          return (
            <Event
              key={route.name}
              i1={route.img}
              i2={route.name}
            />
          )
        })}
      </div>
    </div>
  )
}
