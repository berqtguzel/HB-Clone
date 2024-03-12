import React from 'react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

import sl1 from '../../assets/img/sl1.png';
import sl2 from '../../assets/img/sl2.png';
import sl3 from '../../assets/img/sl3.png';
import sl4 from '../../assets/img/sl4.png';

const Slider = () => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src={sl1} alt="" className="slider-img" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sl2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sl3} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={sl4} alt="" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Slider;
