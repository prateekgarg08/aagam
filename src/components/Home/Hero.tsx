import { FC } from 'react'
import Image from 'next/image'

export const Hero: FC<{}> = ({}) => {
  return (
    <div className="flex bg-black flex-col w-full my-20 py-5 justify-center items-center space-y-10">
      <Image
        src="/assets/logo/banner_new.svg"
        width={530}
        height={300}
        alt="banner"
      />
      <button className="rounded-2xl bg-orange text-white text-xl px-4 py-1">
        Register Now
      </button>
    </div>
  )
}
