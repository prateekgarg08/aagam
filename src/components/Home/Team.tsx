import { FC } from 'react'

export const Team: FC<{}> = ({}) => {
  return (
    <div className="bg-black w-full h-full p-14 ">
      <div className="text-white text-3xl text-center ">CLSU TEAM</div>

      <div className="flex w-full h-full rounded-full sm:flex-col  sm:justify-center sm:align-center  xl:flex-row mt-14 ">
        <div className="w-1/3 h-1/3 p-20 sm:flex sm:justify-center sm:align-center sm:w-auto">
          <img
            src="image_2.png"
            alt="img"
            className="rounded-full w-full h-30"
          ></img>
        </div>
        <div className="w-1/3 h-1/3 p-20 sm:flex sm:justify-center sm:align-center sm:w-auto ">
          <img
            src="image_2.png"
            alt="img"
          ></img>
        </div>
        <div className="w-1/3 h-1/3 p-20 sm:flex sm:justify-center sm:align-center sm:w-auto">
          <img
            src="image_3.svg"
            alt="img"
          ></img>
        </div>
      </div>
    </div>
  )
}
