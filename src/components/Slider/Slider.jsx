import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
  const swiperDatas = [
    { img: 'sl1', id: 'img1' },
    { img: 'sl2', id: 'img1' },
    { img: 'sl3', id: 'img1' },
    { img: 'sl4', id: 'img1' },
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      {swiperDatas.map((obj) => (
        <SwiperSlide key={obj.id}>
          <img src={require(`../../assets/img/${obj.img}.png`)} alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
