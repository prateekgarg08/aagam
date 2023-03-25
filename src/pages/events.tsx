import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Common/Navbar'

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
        <div className="w-full h-full relative ">
          <div className="flex-col w-full h-full absolute">
            <Navbar
            // n1="Home"
            // n2="Arts & Craft"
            // n3="Fun events"
            // n4="Cultural"
            // n5="Technical"
            // n6="Log in"
            />
            <div className="flex items-center justify-center w-full h-3/6 pt-14">
              <div className="text-white text-5xl sm:text-no "> Events</div>
            </div>
            <div className="flex items-center justify-between w-full h-2/5 p-14 pt-0 pb-28 ">
              <div className="text-white text-2xl  sm:text-no">
                <a href="#"> Arts & Cratf</a>
              </div>
              <div className="text-white text-2xl sm:text-no">Fun Events</div>
              <div className="text-white text-2xl sm:text-no">Technical</div>
              <div className="text-white text-2xl sm:text-no">Cultural</div>
            </div>
          </div>

          <img
            className="w-full h-full"
            src="event.png"
            alt="img"
          />
        </div>

        <div
          className=" h-full w-full
     bg-black p-4 "
        >
          <div className="text-center text-3xl text-white font-bold mt-4 ">
            Technical Events
          </div>
          <div className="flex flex-col items-center w-full h-full xl:flex xl:flex-wrap p-5 xl:flex-row esm:flex esm:flex-col esm:items-center">
            <Event
              i1="tresure.png"
              i2="Tresure Hunt"
            />
            <Event
              i1="tresure.png"
              i2="Robo War"
            />

            <Event
              i1="tresure.png"
              i2="E-Sports"
            />

            <Event
              i1="tresure.png"
              i2="Coding Competition"
            />

            <Event
              i1="tresure.png"
              i2="Picture Patch"
            />
          </div>
        </div>

        <div
          className=" h-full w-full
     bg-black p-4 "
        >
          <div className="text-center text-3xl text-white font-bold mt-4 ">
            Cultural
          </div>
          <div className="flex flex-col items-center w-full h-full xl:flex xl:flex-wrap p-5 xl:flex-row esm:flex esm:flex-col esm:items-center">
            <Event
              i1="tresure.png"
              i2="Mono Acting"
            />
            <Event
              i1="tresure.png"
              i2="Skit"
            />

            <Event
              i1="tresure.png"
              i2="Poetry"
            />

            <Event
              i1="tresure.png"
              i2="Debate"
            />

            <Event
              i1="tresure.png"
              i2="OpenMic"
            />

            <Event
              i1="tresure.png"
              i2="InQuizition"
            />
          </div>
        </div>

        <div
          className=" h-full w-full
     bg-black p-4 "
        >
          <div className="text-center text-3xl text-white font-bold mt-4 ">
            Art & Crafts
          </div>
          <div className="flex flex-col items-center w-full h-full xl:flex xl:flex-wrap p-5 xl:flex-row esm:flex esm:flex-col esm:items-center">
            <Event
              i1="tresure.png"
              i2="Rangoli Making"
            />
            <Event
              i1="tresure.png"
              i2="Face Painting"
            />

            <Event
              i1="tresure.png"
              i2="Sketching"
            />

            <Event
              i1="tresure.png"
              i2="Cartooning"
            />

            <Event
              i1="tresure.png"
              i2="Project Expo"
            />
          </div>
        </div>

        <div
          className=" h-full w-full
     bg-black p-4 "
        >
          <div className="text-center text-3xl text-white font-bold mt-4 ">
            Novelty Games
          </div>
          <div className="flex flex-col items-center w-full h-full xl:flex xl:flex-wrap p-5 xl:flex-row esm:flex esm:flex-col esm:items-center">
            <Event
              i1="tresure.png"
              i2="Slow Cycling"
            />
            <Event
              i1="tresure.png"
              i2="Leg Cycling"
            />

            <Event
              i1="tresure.png"
              i2="Gram"
            />

            <Event
              i1="tresure.png"
              i2="Balloon Shooting"
            />

            <Event
              i1="tresure.png"
              i2="BasketBall"
            />
          </div>
        </div>
      </div>
    </>
  )
}
