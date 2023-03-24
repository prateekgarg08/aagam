import { FC } from 'react'

export const Sidebar: FC<{}> = ({}) => {
  return (
    <div className="flex-col w-18 h-full fixed right-0 flex items-center justify-center ">
      <div className="flex-col justify-center align-center  h-28 m-4  ">
        <div className="text-white text-2xl flex-col -rotate-90 ">
          Technical
        </div>
      </div>
      <div className="flex-col justify-center align-center h-28 m-4 ">
        <div className="text-white text-2xl flex-col -rotate-90 ">Cultural</div>
      </div>
      <div className="flex-col justify-center align-center  h-28 m-4  ">
        <div className="text-white text-2xl flex-col -rotate-90 ">
          Fun & arts
        </div>
      </div>
      <div className="flex-col justify-center align-center  h-28 m-4  ">
        <div className="text-white text-2xl flex-col -rotate-90 "></div>
      </div>
    </div>
  )
}
