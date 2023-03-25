import { FC } from 'react'
import { FaInstagram } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import Link, { LinkProps } from 'next/link'

export const Footer: FC<{}> = ({}) => {
  return (
    <div className="flex w-fullh-auto bg-black p-4">
      <div className="flex w-1/4 h-full bg-black flex-col ">
        <div className="w-full h-14 sm:h-full flex align-center justify-center">
          <img
            src="/assets/logo/new.svg"
            alt="img"
          ></img>
        </div>
        <div className="flex esm:flex esm:flex-wrap esm:h-full esm:w-full esm:items-center esm:justify-center h-4 pr-2 gap-4 align-center justify-center p-2">
          <FaInstagram
            className="esm:text-xl"
            color="white"
            fontSize={'28px'}
          />
          <FaTwitter
            color="white"
            className="esm:text-xl"
            fontSize={'28px'}
          />
          <FaLinkedin
            color="white"
            className="esm:text-xl"
            fontSize={'28px'}
          />
          <FaYoutube
            color="white"
            className="esm:text-xl"
            fontSize={'28px'}
          />
        </div>
      </div>

      <div className="flex w-1/4 h-full flex-col">
        <div className="w-full h-auto flex-col align-center justify-center">
          <div className="p-4 sm:p-2">
            <Link
              href="/events"
              className="text-xl text-white p-4 m:text-sm sm:p-2"
            >
              EVENTS
            </Link>
          </div>
          <div className="p-2 sm:p-0">
            <Link
              href="/events"
              className="text-xl text-white p-2 sm:text-sm sm:p-0"
            >
              Treasure Hunt
            </Link>
          </div>
          <div className="p-2 sm:p-0">
            <Link
              href="/events"
              className="text-xl text-white p-2 sm:text-sm sm:p-0"
            >
              Dare 2 Win
            </Link>
          </div>
        </div>
      </div>

      <div className="flex w-1/4 h-full flex-col">
        <div className="w-full h-auto flex-col align-center justify-center">
          <div className="p-4 sm:p-2">
            <a
              href="#"
              className="text-xl text-white p-4"
            >
              About Us
            </a>
          </div>
          <div className="p-2 sm:p-0">
            <a
              href="#"
              className="text-xl text-white p-2 sm:text-sm sm:p-0"
            >
              Teams
            </a>
          </div>
          <div className="p-2 sm:p-0">
            <a
              href="#"
              className="text-xl text-white p-2 sm:text-sm sm:p-0"
            >
              Contact us
            </a>
          </div>
        </div>
      </div>

      <div className="flex w-1/4 h-full flex-col">
        <div className="w-full h-auto flex-col align-center justify-center">
          <div className="text-xl text-white p-4 sm:p-2 ">Legal</div>
          <div className="text-xl text-white p-2 sm:text-sm sm:p-0">
            Privacy
          </div>
          <div className="text-xl text-white p-2 sm:text-sm sm:p-0">Terms</div>
        </div>
      </div>
    </div>
  )
}
