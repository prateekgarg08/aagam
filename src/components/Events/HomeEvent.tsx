import Image from 'next/image'

type Im = {
  i1: string
  i2: string
}

export const HomeEvent = (props: Im) => {
  return (
    <div className="flex flex-col gap-7 bg-[#06191d] items-center h-96 w-80 shadow-2xl hover:shadow-xl duration-200 transition-all hover:shadow-primary/40 shadow-primary/40 rounded-lg">
      <div className="w-full h-3/4">
        <Image
          src={props.i1}
          width={100}
          height={100}
          style={{ height: '100%', width: '100%' }}
          alt="event"
        />
      </div>
      <button className="bg-gradient-to-b from-primary to-secondary hover:opacity-95 flex items-end justify-center  text-gray-100 rounded px-5 py-2">
        Register Now
      </button>
    </div>
  )
}
