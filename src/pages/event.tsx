import { Contect } from '@/components/Common/Contect'
import { Event } from '@/components/Events/Event'
import { Sidebar } from '@/components/Events/Sidebar'
import React from 'react'

function event() {
  return (
    <div
      className="w-full h-full
     bg-black p-4"
    >
      <Sidebar />
      <div className="text-center text-3xl text-white ">EVENTS</div>
      <div className="flex w-full h-full xl:flex-wrap p-5 sm:flex-col xl:flex-row sm:items-center">
        <Event />
        <Event />
        <Event />
      </div>

      <div className="text-center text-3xl text-white">EVENTS</div>
      <div className="flex w-full h-full xl:flex-wrap p-5 sm:flex-col xl:flex-row sm:items-center">
        <Event />
        <Event />
        <Event />
      </div>
      <Contect />
    </div>
  )
}

export default event
