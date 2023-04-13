import Head from 'next/head'
import { Inter } from 'next/font/google'
import { About } from '@/components/Home/About'
import { Sponsor } from '@/components/Home/Sponsor'
import { Team } from '@/components/Home/Team'
import { Footer } from '@/components/Home/Footer'
import { Navbar } from '@/components/Common/Navbar'
import { Hero } from '@/components/Home/Hero'
import { Glimpses } from '@/components/Home/Glimpses'
import { HomeEvents } from '@/components/Home/HomeEvents'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
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
      <div className="relative flex flex-col gap-24  min-h-screen bg-black">
        <Navbar />
        <Hero />
        <About />
        <HomeEvents />
        <Glimpses />
        <Sponsor />
        <Footer />
      </div>
    </>
  )
}
