import { FC } from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

export const Footer: FC<{}> = ({}) => {
  const router = useRouter()
  return (
    <div className="flex w-full h-60 bg-black p-4 flex-col">
      <div className="flex w-full h-full bg-black flex-col">
        <div className="w-full  sm:h-full flex align-center justify-center">
          <Image
            src="/logo.png"
            alt="img"
            width={200}
            height={100}
          />
        </div>
        <div className="flex esm:flex esm:flex-wrap esm:h-full esm:w-full esm:items-center esm:justify-center h-4 pr-2 gap-8 align-center justify-center p-2 esm:p-1">
          <Link href="https://www.instagram.com/aagamctae/">
            {' '}
            <FaInstagram
              onClick={() => {
                router.push('https://www.instagram.com/aagamctae/')
              }}
              className="esm:text-xl "
              color="white"
              fontSize={'18px'}
            />
          </Link>
          <Link href="https://www.linkedin.com/company/aagam-ctae/">
            {' '}
            <FaLinkedin
              onClick={() => {
                router.push('https://www.linkedin.com/company/aagam-ctae/')
              }}
              color="white"
              className="esm:text-sm"
              fontSize={'18px'}
            />
          </Link>
          <Link href="https://youtube.com/@AAGAMCTAE">
            <FaYoutube
              onClick={() => {
                router.push('https://youtube.com/@AAGAMCTAE')
              }}
              color="white"
              className="esm:text-sm"
              fontSize={'18px'}
            />
          </Link>
        </div>
      </div>

      <div className="flex w-full h-full  flex-col">
        <div className="flex esm:flex esm:flex-wrap esm:h-2 esm:w-full esm:items-center esm:justify-center h-2 pr-2 gap-4 esm:gap-1 xl:gap-1 align-center justify-center p-2 esm:p-1">
          <div className="p-4 sm:p-2 lg:p-4">
            <Link
              href="/events"
              className="text-gray-400 text-sm hover:text-gray-50 duration-100 "
            >
              Events
            </Link>
          </div>
          <div className="p-4 sm:p-2 ">
            <Link
              href="/events"
              className="text-gray-400 text-sm hover:text-gray-50 duration-100 "
            >
              Home
            </Link>
          </div>
          <div className="p-4 sm:p-2 lg:p-4">
            <Link
              href="/about"
              className="text-gray-400 text-sm hover:text-gray-50 duration-100 "
            >
              About Us
            </Link>
          </div>
          <div className="p-4 sm:p-2 esm:p-2 ">
            <Link
              href="/events"
              className="text-gray-400 text-sm hover:text-gray-50 duration-100 "
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>

      {/* <div className="flex w-full h-full items-center justify-center ">
        <div className="w-full h-auto  items-center justify-center">
          <div className="p-4 sm:p-2">
            <Link
              href="/events"
              className="text-gray-400 text-sm hover:text-gray-50 duration-100 "
            >
              EVENTS
            </Link>
          </div>
          <div className="p-2 sm:p-0">
            <Link
              href="/events"
              className="text-gray-400 text-sm hover:text-gray-50 duration-100 "
            >
              Treasure Hunt
            </Link>
          </div>
          <div className="p-2 sm:p-0">
            <Link
              href="/events"
              className="text-gray-400 text-sm hover:text-gray-50 duration-100"
            >
              Dare 2 Win
            </Link>
          </div>
        </div>
      </div> */}

      {/*</div> <div className="flex w-1/4 h-full flex-col">
        <div className="w-full h-auto flex-col align-center justify-center">
          <div className="p-4 sm:p-2">
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-gray-50 duration-100"
            >
              About Us
            </a>
          </div>
          <div className="p-2 sm:p-0">
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-gray-50 duration-100"
            >
              Teams
            </a>
          </div>
          <div className="p-2 sm:p-0">
            <a
              href="#"
              className="text-gray-400 text-sm hover:text-gray-50 duration-100"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-1/4 h-full flex-col">
        <div className="w-full h-auto flex-col align-center justify-center">
          <div className="p-4 sm:p-0 text-sm text-gray-400 hover:text-gray-50 duration-100">
            Legal
          </div>
          <div className="p-2 sm:p-0 text-sm text-gray-400 hover:text-gray-50 duration-100">
            Privacy
          </div>
          <div className="p-2 sm:p-0 text-sm text-gray-400 hover:text-gray-50 duration-100">
            Terms
          </div>
        </div> */}
      {/* </div> */}
    </div>
  )
}
