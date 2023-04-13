import Head from 'next/head'
import { Inter } from 'next/font/google'
import { Navbar } from '@/components/Common/Navbar'

import { Event } from '@/components/Events/Event'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function event() {
  const routes = [
    {
      name: 'Treasure Hunt',
      key: '1',
      img: '/thunt.jpeg',
      url: 'https://unstop.com/o/SgVJE3z?lb=CMPi0J9',
    },
    {
      name: 'Dare 2 Win',
      key: '8',
      img: '/images.jpeg',
      url: 'https://unstop.com/o/jcPLfAv?lb=CMPi0J9',
    },

    {
      name: 'E-Sport',
      key: '3',
      // img: 'https://designshack.net/wp-content/uploads/PUBG-Gaming-Esports-Logo-Template-1024x682.jpg',
      img: '/es.jpg',
      url: 'https://unstop.com/o/jydmBQl?lb=CMPi0J9',
    },
    {
      name: 'Robo War',
      key: '2',
      img: '/roborace.jpeg',
      url: 'https://unstop.com/o/d3q0HuL?lb=CMPi0J9',
    },

    {
      name: 'Code Competition',
      key: '5',
      img: '/cod.jpeg',
      url: 'https://unstop.com/o/d3q0HuL?lb=CMPi0J9',
    },

    {
      name: "Rubik's Cube",
      key: '4',
      img: '/cube.webp',
      url: '/events',
    },
  ]

  const routes1 = [
    {
      name: 'Poetry',
      key: '13',
      img: '/poetry.jpeg',
      url: '/events',
    },
    {
      name: 'Debate',
      key: '14',
      img: '/deb.png',
      url: '/events',
    },

    {
      name: 'Quiz',
      key: '16',
      img: '/quizz-min.jpg',
      url: '/events',
    },
  ]

  const routes2 = [
    {
      name: 'Rangoli Making',
      key: '17',
      img: '/rangoli.jpeg',
      url: '/events',
    },
    {
      name: 'Poster Making',
      key: '18',
      img: '/pos.jpeg',
      url: '/events',
    },

    {
      name: 'Face Painting',
      key: '21',
      img: '/face.jpeg',
      url: '/events',
    },
    {
      name: 'Sketching',
      key: '31',
      img: '/sk.jpeg',
      url: '/events',
    },

    {
      name: 'Art Gallery',
      key: '51',
      img: '/art.webp',
      url: '/events',
    },
    {
      name: 'Project Expo',
      key: '61',
      img: '/expo.jpeg',
      url: '/events',
    },
  ]

  const routes3 = [
    {
      name: 'Slow Cyclingy',
      key: '71',
      img: '/slow.jpeg',
      url: '/events',
    },
    {
      name: 'Relay Sack Race',
      key: '81',
      img: '/leg.jpeg',
      url: '/events',
    },

    {
      name: 'Tug Of War',
      key: '34',
      img: '/ballon.jpg',
      url: '/events',
    },
    {
      name: 'Basket Ball',
      key: '35',
      img: '/bask.jpeg',
      url: '/register',
    },
    {
      name: 'Jalebi Race',
      key: '7',
      img: '/bask.jpeg',
      url: '/events',
    },
    {
      name: 'FoootBall',
      key: '36',
      img: '/foot.jpeg',
      url: '/events',
    },
  ]

  const router = useRouter()

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
            <div className="flex flex-col items-center justify-center w-full h-full">
              <div>
                <div className="text-white esm:text-5xl text-8xl  ">
                  {' '}
                  Events
                </div>
                <button
                  onClick={() => {
                    router.push('/events')
                  }}
                  className="flex mt-8 items-center gap-3 font-semibold text-white rounded-xl px-3 py-2 bg-gradient-to-r esm:text-sm text-2xl from-primary to-secondary hover:from-secondary hover:to-primary duration-300 transition-all"
                >
                  Download Rule Book
                </button>
              </div>
            </div>
            {/* <div className="flex items-center justify-between w-full h-2/5 p-14 pt-0 pb-28 esm:pb-28 esm:p-0 ">
              <div className="text-white text-3xl lg:text-2xl sm:text-sm">
                Arts & Cratf
              </div>
              <div className="text-white text-2xl sm:text-sm">Fun Events</div>

              <div className="text-white text-2xl sm:text-sm">Technical</div>

              <div className="text-white text-2xl sm:text-sm">Cultural</div>
  </div>*/}
          </div>

          <Image
            className="w-full esm:h-80 h-full opacity-10"
            src="/tro.jpg"
            alt="img"
            width={300}
            height={100}
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
                    key={route.key}
                    i1={route.img}
                    i2={route.name}
                    i3={route.url}
                  />
                )
              })}
            </div>
          </div>
        </div>

        <div className=" h-full w-full bg-black p-4 ">
          <div className="text-center text-3xl text-white font-bold mt-4 ">
            Cultural
            <div className="flex flex-col items-center w-full h-full xl:flex xl:flex-wrap p-5 xl:flex-row esm:flex esm:flex-col esm:items-center">
              {/* {routes.map((route) => { */}

              {routes1.map((route) => {
                return (
                  <Event
                    key={route.key}
                    i1={route.img}
                    i2={route.name}
                    i3={route.url}
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
                    key={route.key}
                    i1={route.img}
                    i2={route.name}
                    i3={route.url}
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
                    key={route.key}
                    i1={route.img}
                    i2={route.name}
                    i3={route.url}
                  />
                )
              })}
            </div>
          </div>
        </div>

        {/* <div className=" h-full w-full bg-black p-4 ">
          <div className="text-center text-3xl text-white font-bold mt-4 ">
            College Compettions
            <div className="flex flex-col items-center w-full h-full xl:flex xl:flex-wrap p-5 xl:flex-row esm:flex esm:flex-col esm:items-center">
            

             
            </div>
          </div>
        </div>  */}
      </div>
    </>
  )
}
