import Image from 'next/image'
import { FC } from 'react'
import { useRouter } from 'next/router'

export const Hero: FC<{}> = ({}) => {
  const router = useRouter()
  return (
    <div className="flex bg-black flex-col w-full  justify-center items-center space-y-10">
      <Image
        src="/AAGAMLOGO1.png"
        width={630}
        height={400}
        alt="banner"
      />
      {/*   <button
        onClick={() => {
          router.push('/register')
        }}
        className="flex  items-center gap-3 font-semibold text-white rounded-full px-3 py-2 bg-gradient-to-r text-2xl from-primary to-secondary hover:from-secondary hover:to-primary duration-300 transition-all"
      >
        Register
      </button> */}
    </div>
  )
}
