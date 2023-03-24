import Head from 'next/head'
import { Inter } from 'next/font/google'

import { Event } from '@/components/Events/Event'

const inter = Inter({ subsets: ['latin'] })

export default function event() {
  return (
    <>
      <Head>
        <title>Aagam</title>
        <meta
          name="description"
          content="Colleg"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <div
        className=" h-full w-full
     bg-black p-4 "
      >
        <div className="w-full h-full p-4 relative ">
          <div className="flex-col w-full h-full absolute">
            <div className="flex items-center justify-center w-full h-3/6 pt-14">
              <img src="Events.png" />
            </div>
            <div className="flex items-center justify-between w-full h-2/5 p-14 pt-0 pb-28 ">
              <img src="Arts&Craft.png" />
              <img src="Cultural.png" />
              <img src="FunEvents.png" />
              <img src="Technical.png" />
            </div>
          </div>

          <img
            className="w-full h-full"
            src="event.png"
            alt="img"
          />
        </div>

        <div className="text-center text-3xl text-white ">Arts & Craft</div>
        <div className="flex w-full h-full xl:flex-wrap p-5 sm:flex-col xl:flex-row sm:items-center">
          <Event
            i1="tresure.png"
            i2="TreasureHunt.png"
          />
          <Event
            i1="tresure.png"
            i2="RoboWar.png"
          />
          {/* <Event />  */}
        </div>

        {/* <div className="text-center text-3xl text-white">Cultural</div>
        <div className="flex w-full h-full xl:flex-wrap p-5 sm:flex-col xl:flex-row sm:items-center">
          <Event />
          <Event />
          <Event />
        </div>

        <div className="text-center text-3xl text-white">Technical</div>
        <div className="flex w-full h-full xl:flex-wrap p-5 sm:flex-col xl:flex-row sm:items-center">
          <Event />
          <Event />
          <Event />
        </div>

        <div className="text-center text-3xl text-white">FunEvent</div>
        <div className="flex w-full h-full xl:flex-wrap p-5 sm:flex-col xl:flex-row sm:items-center">
          <Event />
          <Event />
          <Event />
        </div> */}
      </div>
    </>
  )
}
