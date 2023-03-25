import { FC } from 'react'

export default function register() {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-bgBlack">
      <div className="rounded-3xl shadow-lg bg-white py-8 px-12 esm:px-2 esm:py-2 flex flex-col items-center gap-4 lg:w-2/5 w-3/4">
        <p className="text-3xl font-bold text-primary">Login</p>

        <div className="w-3/5 xl:w-1/2  sm:w-full flex-col  flex justify-center items-center">
          <div className="m-4 w-full flex-col">
            <div className="text-xl text-black">EVENT</div>
            <input
              type="text"
              className="h-12 border-2 w-4/5 border-black"
            />
          </div>

          <div className="m-4 w-full flex-col">
            <div className="text-xl text-black">COLLEGE</div>
            <input
              type="text"
              className="h-12 border-2 w-4/5 border-black"
            />
          </div>

          <div className="m-4 w-full flex-col">
            <div className="text-xl text-black">YEAR OF STUDY</div>
            <input
              type="text"
              className="h-12 border-2 w-4/5 border-black"
            />
          </div>

          <div className="m-4 w-full flex-col">
            <div className="text-xl text-black">CITY</div>
            <input
              type="text"
              className="h-12 border-2 w-4/5 border-black"
            />
          </div>
        </div>
      </div>
      <div className=" m-4 w-full h-full flex items-center justify-center">
        <div className="w-1/4 h-1/2 sm:w-3/4 p-3 border-2 border-black rounded-lg flex items-center justify-center">
          <div className="text-center text-3xl sm:text-xl  text-black ">
            REGISTER
          </div>
        </div>
      </div>
    </div>
  )
}
