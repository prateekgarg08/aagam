import Image from 'next/image'
import { FC } from 'react'

export const Team: FC<{}> = ({}) => {
  return (
    <div className="bg-black w-full h-full p-14 ">
      <div className="text-white text-3xl text-center font-bold">CLSU TEAM</div>

      <div className="flex w-full h-full rounded-full sm:flex-col  sm:justify-center sm:align-center  xl:flex-row mt-14 ">
        <div className="xl:flex-col w-1/3 h-1/3 sm:flex-col sm:justify-center sm:align-center sm:w-auto">
          <div className="flex items-center justify-center">
            <Image
              src="cpSir.png"
              alt="img"
            />
          </div>
          <div className="p-2 first-letter:w-full h-auto text-2xl text-white flex align-center justify-center">
            Puranjay Jodha
          </div>
          <div className="w-full h-auto text-xl text-white flex align-center justify-center">
            College President
          </div>
        </div>
        <div className="xl:flex-col w-1/3 h-1/3 sm:p-8 sm:flex-col sm:justify-center sm:align-center sm:w-auto ">
          <div className="flex items-center justify-center">
            <Image
              src="cpSir.png"
              alt="img"
            />
          </div>
          <div className="p-2 first-letter:w-full h-auto text-2xl text-white flex align-center justify-center">
            Kamlesh Sirvi
          </div>
          <div className="w-full h-auto text-xl text-white flex align-center justify-center">
            College General Secratary
          </div>
        </div>
        <div className="xl:flex-col w-1/3 h-1/3 sm:flex-col sm:justify-center sm:align-center sm:w-auto">
          <div className="flex items-center justify-center">
            <Image
              src="cpSir.png"
              alt="img"
            />
          </div>
          <div className="p-2 first-letter:w-full h-auto text-2xl text-white flex align-center justify-center">
            Sachin Sharma
          </div>
          <div className="w-full h-auto text-xl text-white flex align-center justify-center">
            College Joint Secratary
          </div>
        </div>
      </div>
    </div>
  )
}
