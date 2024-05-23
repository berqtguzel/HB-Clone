import React, { useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "../SliderMain/SliderMain.css";
const SliderMain = () => {
  const swiperDatas = [
    {
      title:
        " Karaca Home Amelia Mavi %100 Pamuk Tek Kişilik Lastikli Çarşaflı.... ",
      imgSrc: "sl1",
      price: "599,98TL",
    },
    {
      title: "Auvc Erkek Hakiki Deri Siyah Eldiven L (Yurt Dışından) ",
      imgSrc: "sl2",
      price: "730,29 TL",
    },
    {
      title: " Sakuraa 168 Parça Boya Seti (Yurt Dışından) ",
      imgSrc: "sl3",
      price: "724,02TL",
    },
    {
      title:
        " Sanlindou Ev Manuel Kuzu Dilimleme Dondurulmuş Et Kesme Makinesi.... ",
      imgSrc: "sl5",
      price: "1.011,12TL",
      isHover: "false",
    },
    {
      title:
        " Calvin Klein Logolu Fermuarlı Ayarlanabilir Omuz Askılı Çanta.... ",
      imgSrc: "sl6",
      price: "2.199,89TL",
      isHover: "false",
    },
    {
      title: " icape Çay Ağacı Özlü Yüz Temizleme Jeli 400ml ",
      imgSrc: "sl7",
      price: "256,00TL",
    },
    {
      title:
        "Karaca Flow 84 Parça 12 Kişilik Çatal Kaşık Bıçak Takımı Elegance Kutulu ",
      imgSrc: "sl8",
      price: "3.299,00TL",
    },
    {
      title: "NARPUMP WHISPER, Ultra Sessiz & Ultra Hızlı Otomatik Şarjlı....",
      imgSrc: "sl10",
      price: "494,00TL",
    },
    {
      title:
        "Calvin Klein Fermuarlı Ayarlanabilir Omuz Askılı Çanta Kadın Çanta.... ",
      imgSrc: "sl11",
      price: "1.799,90TL",
    },
    {
      title: "Slazenger Run On Uzaktan Kumandalı – Full Katlanır Koşu Bandı ",
      imgSrc: "sl12",
      price: "10.399,90TL",
    },
  ];
  return (
    <div className="slider-main">
      <div className="slider-title">
        <h2 className="slider-title-h2">
          Süper Fiyat, Süper Teklif
          <a href="#" className="title-link">
            Tümü
          </a>
        </h2>
      </div>
      {}
      <div className="slider-swiper">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="super-slider">
            <img
              className="super-img"
              src={require(`../../assets/img/SliderMainImg/super.jpg`)}
              alt=""
            />
          </SwiperSlide>
          {swiperDatas.map((obj) => (
            <SwiperSlide key={obj.id}>
              <div className="slider-body">
                <p className="swiper-title">{obj.title}</p>
                <img
                  className="swiper-img"
                  src={require(`../../assets/img/SliderMainImg/${obj.imgSrc}.jpg`)}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SliderMain;
