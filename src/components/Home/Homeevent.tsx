import { FC } from 'react'
import React from 'react'
import { Event } from '../Events/Event'

export const Homeevent: FC<{}> = ({}) => {
  return (
    <div
      className=" h-full w-full
     bg-black p-4 "
    >
      <div className="text-center text-3xl text-white font-bold mt-4 ">
        Events
      </div>
      <div className="flex flex-col items-center w-full h-full xl:flex xl:flex-wrap p-5 xl:flex-row esm:flex esm:flex-col esm:items-center">
        <Event
          i1="tresure.png"
          i2="Techical"
        />
        <Event
          i1="tresure.png"
          i2="cultural"
        />

        <Event
          i1="tresure.png"
          i2="Art & Craft"
        />

        <Event
          i1="tresure.png"
          i2="Competition"
        />

        <Event
          i1="tresure.png"
          i2="Novelty Games"
        />
      </div>
    </div>
  )
}
