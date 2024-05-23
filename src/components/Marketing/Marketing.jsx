import React from "react";
import "./Marketing.css";
const Marketing = () => {
  const images = [
    {
      imgSrc: "format",
      id: "img1",
      text: "Anne Çocuk Kulübü'ne ücretsiz katıl",
    },
    {
      imgSrc: "format-1",
      id: "img2",
      text: "Hemen sana özel krediye başvur!",
    },
    {
      imgSrc: "format-2",
      id: "img3",
      text: "3 saatte bir yenilenen fırsatlar",
    },
    {
      imgSrc: "format-3",
      id: "img4",
      text: "Peşin 12 ay taksit hepsipay ile tanış",
    },
    {
      imgSrc: "format-4",
      id: "img5",
      text: "Süper fiyatlarla yurt dışından ürünler",
    },
  ];

  return (
    <div className="marketing">
      {images.map((obj) => (
        <div className="marketing-bilboard" key={obj.id}>
          <h2 className="format-text">{obj.text}</h2>
          <img
            className="formats"
            src={require(`../../assets/img//${obj.imgSrc}.jpg`)}
            alt=""
          />
        </div>
      ))}
    </div>
  );
};

export default Marketing;
