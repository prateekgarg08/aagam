// import Image from 'next/image'
import { FC } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

export const Hero: FC<{}> = ({}) => {
  // const router = useRouter()
  return (
    // <div className="flex bg-black flex-col w-full py-5 justify-center items-center gap-10">
    //   <Image
    //     src="/AAGAMLOGO1.png"
    //     width={630}
    //     height={400}
    //     alt="banner"
    //   />
    // {/*   <button
    //   onClick={() => {
    //     router.push('/register')
    //   }}
    //   className="flex  items-center gap-3 font-semibold text-white rounded-full px-3 py-2 bg-gradient-to-r text-2xl from-primary to-secondary hover:from-secondary hover:to-primary duration-300 transition-all"
    // >
    //   Register
    // </button> */}
    // </div>

    <div className="flex justify-center items-center w-full h-screen esm:h-full bg-[url('/wp2974616.jpg')] animate-gradient ">
      <div className="w-im h-im rounded-full mt-4 mb-4 esm:w-60 esm:h-60 shadow-sh relative ">
        <div className="absolute">
          <Image
            src="/AAGAMLOGO1.png"
            width={470}
            height={470}
            alt="Logo"
            className="flex items-center rounded-full "
          />
        </div>
      </div>
    </div>
  )
}
