import { FC } from 'react'
// import { Navigation } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'
// import { StaticImageData } from 'next/image'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/autoplay'
import Image from 'next/image'

export const Slider: FC<{
  slides: any[]
  slidesPerView: number
  navigation: boolean
}> = ({ slides, slidesPerView = 3, navigation = false }) => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      spaceBetween={50}
      slidesPerView={slidesPerView}
      navigation={navigation}
      autoplay={{ delay: 3000 }}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide}>
          <Image
            key={slide}
            src={slide}
            alt=""
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
