import { Event } from '@/components/Events/Event'
import React from 'react'

function event() {
  return (
    <div
      className="w-full h-screen
     bg-black p-4"
    >
      <div className="text-center text-3xl text-white">EVENTS</div>
      <div className="flex w-full h-full xl:flex-wrap p-5 sm:flex-col sm sm:items-center">
        <Event />
        <Event />
        <Event />
      </div>
    </div>
  )
}

export default event
