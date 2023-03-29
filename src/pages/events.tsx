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
      img: 'thunt.jpeg',
      url: '/events',
    },
    {
      name: 'Robo War',
      img: 'roborace.jpeg',
      url: '/events',
    },
    {
      name: 'E-Sport',
      img: 'https://designshack.net/wp-content/uploads/PUBG-Gaming-Esports-Logo-Template-1024x682.jpg',
      url: '/events',
    },
    {
      name: "Rubik's Cube",
      img: 'cube.webp',
      url: '/events',
    },
    {
      name: 'Code Competition',
      img: 'https://th.bing.com/th/id/OIP.wNXdwGG1Ja-os2aO6_ZzqgHaFo?pid=ImgDet&rs=1',
      url: '/events',
    },
    {
      name: 'Picture Patch',
      img: 'pic.jpeg',
      url: '/events',
    },
    {
      name: 'Viaduct',
      img: 'vi.webp',
      url: '/events',
    },
    {
      name: 'Dare 2 Win',
      img: 'images.jpeg',
      url: '/events',
    },
  ]

  const routes1 = [
    {
      name: 'Mono Acting',
      img: 'mono.jpeg',
      url: '/events',
    },
    {
      name: 'Skit',
      img: 'd.jpeg',
      url: '/events',
    },
    {
      name: 'Poetry',
      img: 'poetry.jpeg',
      url: '/events',
    },
    {
      name: 'Debate',
      img: 'deb.png',
      url: '/events',
    },
    {
      name: 'OpenMic',
      img: 'open.jpeg',
      url: '/events',
    },
    {
      name: 'InQuizition',
      img: 'quizz-min.jpg',
      url: '/events',
    },
  ]

  const routes2 = [
    {
      name: 'Rangoli Making',
      img: 'rangoli.jpeg',
      url: '/events',
    },
    {
      name: 'Poster Making',
      img: 'pos.jpeg',
      url: '/events',
    },
    {
      name: 'Poetry',
      img: 'poetry.jpeg',
      url: '/events',
    },
    {
      name: 'Face Painting',
      img: 'face.jpeg',
      url: '/events',
    },
    {
      name: 'Sketching',
      img: 'sk.jpeg',
      url: '/events',
    },
    {
      name: 'Cartooning',
      img: 'cartoon.jpeg',
      url: '/events',
    },
    {
      name: 'Art Gallery',
      img: 'art.webp',
      url: '/events',
    },
    {
      name: 'Project Expo',
      img: 'expo.jpeg',
      url: '/events',
    },
  ]

  const routes3 = [
    {
      name: 'Slow Cyclingy',
      img: 'slow.jpeg',
      url: '/events',
    },
    {
      name: 'Leg Cricket',
      img: 'leg.jpeg',
      url: '/events',
    },
    {
      name: 'Gram',
      img: 'gram.webp',
      url: '/events',
    },
    {
      name: 'Ballon Shooting',
      img: 'ballon.jpg',
      url: '/events',
    },
    {
      name: 'Basket Ball',
      img: 'bask.jpeg',
      url: '/events',
    },
    {
      name: 'FoootBall',
      img: 'foot.jpeg',
      url: '/events',
    },
  ]

  const routes4 = [
    {
      name: 'Dance',
      img: 'dan.jpeg',
      url: '/events',
    },
    {
      name: 'Singing',
      img: 'sing.webp',
      url: '/events',
    },
    {
      name: 'Fashion Show',
      img: 'fas.jpeg',
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
              <div className="text-white text-3xl lg:text-2xl sm:text-sm">
                Arts & Cratf
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

        <div className=" h-full w-full bg-black p-4 ">
          <div className="text-center text-3xl text-white font-bold mt-4 ">
            cultural
            <div className="flex flex-col items-center w-full h-full xl:flex xl:flex-wrap p-5 xl:flex-row esm:flex esm:flex-col esm:items-center">
              {/* {routes.map((route) => { */}

              {routes1.map((route) => {
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

        <div className=" h-full w-full bg-black p-4 ">
          <div className="text-center text-3xl text-white font-bold mt-4 ">
            Art & Crafts
            <div className="flex flex-col items-center w-full h-full xl:flex xl:flex-wrap p-5 xl:flex-row esm:flex esm:flex-col esm:items-center">
              {/* {routes.map((route) => { */}

              {routes2.map((route) => {
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

        <div className=" h-full w-full bg-black p-4 ">
          <div className="text-center text-3xl text-white font-bold mt-4 ">
            Novelty Games
            <div className="flex flex-col items-center w-full h-full xl:flex xl:flex-wrap p-5 xl:flex-row esm:flex esm:flex-col esm:items-center">
              {/* {routes.map((route) => { */}

              {routes3.map((route) => {
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

        <div className=" h-full w-full bg-black p-4 ">
          <div className="text-center text-3xl text-white font-bold mt-4 ">
            College Compettions
            <div className="flex flex-col items-center w-full h-full xl:flex xl:flex-wrap p-5 xl:flex-row esm:flex esm:flex-col esm:items-center">
              {/* {routes.map((route) => { */}

              {routes4.map((route) => {
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
