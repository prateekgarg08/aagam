import { FC } from 'react'

export const Hero: FC<{}> = ({}) => {
  return (
    <div className="flex bg-black flex-col w-full my-20 py-5 justify-center items-center space-y-10">
      <img
        src="aagam.png"
        width={530}
        height={300}
        alt="banner"
      />
      <button className="flex items-center gap-3 font-semibold text-white rounded-full px-3 py-2 bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary duration-300 transition-all">
        Register Now
      </button>
    </div>
  )
}
