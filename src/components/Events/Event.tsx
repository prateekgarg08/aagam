import { FC } from 'react'

export const Event: FC<{}> = ({}) => {
  return (
    <div className="flex w-1/4  h-80 bg-white border-2 border-purple-400 rounded-md m-12 sm:pb-3 sm:flex hover:-translate-y-4 sm:justify-center sm:align-center ">
      <div className="flex-col w-full h-full p-4 ">
        <div className="w-full h-3/4">
          <img
            src="image_1.png"
            className="h-full w-full"
          ></img>
        </div>
        <div className="w-full h-1">
          <div className="text-md text-center  border-black border-2 rounded-md m-2 ">
            Technical
          </div>
          <div className="text-md text-center  border-2 border-black rounded-md m-2">
            register now
          </div>
        </div>
      </div>
    </div>
  )
}
