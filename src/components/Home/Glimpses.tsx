import { FC } from 'react'
import { Slider } from '../Common/Slider'
// import { Navigation } from 'swiper'

export const Glimpses: FC<{}> = ({}) => {
  const glimse1 = '/assets/glimpses/1.png'
  const glimse2 = '/assets/glimpses/2.png'
  const glimse3 = '/assets/glimpses/3.png'
  const arr = [glimse1, glimse2, glimse3]
  return (
    <div className="text-center mb-8  bg-bgBlack text-orange items-center border-orange px-5 lg:px-10 space-y-3">
      <h1 className="text-white text-5xl font-bold text-center">Glimpses</h1>
      <div>
        <Slider
          slides={arr}
          navigation={false}
          slidesPerView={1}
        />
      </div>
    </div>
  )
}
