import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Common/Navbar'

import { Event } from '@/components/Events/Event'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'

export default function event() {
  const routes = [
    {
      name: 'Treasure Hunt',
      img: 'tresure.png',
      url: '/events',
    },
    {
      name: 'Treasure Hunt',
      img: 'tresure.png',
      url: '/events',
    },
    {
      name: 'Treasure Hunt',
      img: 'tresure.png',
      url: '/events',
    },
    {
      name: 'Treasure Hunt',
      img: 'tresure.png',
      url: '/events',
    },
    {
      name: 'Treasure Hunt',
      img: 'tresure.png',
      url: '/events',
    },
  ]

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
        <Navbar />
        <div className="w-full h-full relative ">
          <div className="flex-col w-full h-full absolute">
            <div className="flex items-center justify-center w-full h-3/6 pt-14">
              <div className="text-white text-5xl  "> Events</div>
            </div>
            <div className="flex items-center justify-between w-full h-2/5 p-14 pt-0 pb-28 esm:pb-28 esm:p-0 ">
              <div className="text-white text-2xl  sm:text-sm">
                <a href="#"> Arts & Cratf</a>
              </div>
              <div className="text-white text-2xl sm:text-sm">Fun Events</div>
              <div className="text-white text-2xl sm:text-sm">Technical</div>
              <div className="text-white text-2xl sm:text-sm">Cultural</div>
            </div>
          </div>

          <img
            className="w-full esm:h-80 h-full"
            src="event.png"
            alt="img"
          />
        </div>

        <div className=" h-full w-full bg-black p-4 ">
          <div className="text-center text-3xl text-white font-bold mt-4 ">
            Technical
            <div className="flex flex-col items-center w-full h-full xl:flex xl:flex-wrap p-5 xl:flex-row esm:flex esm:flex-col esm:items-center">
              {/* {routes.map((route) => { */}

              {routes.map((route) => {
                return (
                  <Event
                    i1={route.img}
                    i2={route.name}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
