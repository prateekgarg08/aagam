import { FC } from 'react'
import React from 'react'
import { HomeEvent } from '../Events/HomeEvent'
import { Event } from '../Events/Event'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const HomeEvents: FC<{}> = ({}) => {
  const routes = [
    {
      name: 'Technical',
      img: '/tec.jpg',
      url: '/events',
    },
    {
      name: 'Cultural',
      img: '/cul.png',
      url: '/events',
    },
    {
      name: 'Art & Craft',
      img: '/a&c.jpg',
      url: '/events',
    },
  ]
  return (
    <div className="w-full p-4 flex flex-col items-center gap-8">
      <h1 className="text-white text-5xl font-bold text-center">Events</h1>
      <div className="flex flex-wrap gap-8 items-center justify-around w-full">
        {routes.map((route) => {
          return (
            <HomeEvent
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
