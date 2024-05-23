import React, { useState } from "react";
import "../MenuItems/MenuItems.css";
import Overlay from "../../Overlay/Overlay";

const MenuItems = () => {
  const [isHover, isSetHover] = useState(false);

  const handleHover = (isHover) => {
    isSetHover(isHover);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = (isOpen) => {
    setIsOpen(isOpen);
  };

  const items = [
    {
      text: "Elektronik",
      id: 1,
      content: "Bilgisayar/Tablet",
      content2: " Yazıcılar & Projeksiyon",
      content3: "Telefon & Telefon Aksesuarları",
      content4: "TV, Görüntü & Ses Sistemleri",
      content5: "Beyaz Eşya",
      content6: "Klima ve Isıtıcılar",
      content7: "Elektrikli Ev Aletleri",
    },
    {
      text: "Moda",
      id: 2,
      content: "Kadın Giyim",
      content2: "Erkek Giyim",
      content3: "Ayakkabı",
      content4: "Çanta",
      content5: "Takı",
      content6: "Gözlük",
      content7: "Saat",
    },
    {
      text: "Ev, Yaşam, Kırtasiye, Ofis",
      id: 3,
      content: "Mobilya",
      content2: " Ofis / Kırtasiye",
      content3: "Ev Dekorasyon",
      content4: "Yatak",
      content5: "Mutfak",
      content6: "Banyo",
      content7: "Ofis Mobilyaları",
    },
    {
      text: "Oto,Bahçe,Yapı Market",
      id: 4,
      content: "Yapı Market",
      content2: "Hırdavat",
      content3: "Oto Aksesuar",
      content4: "Bahçe",
      content5: "Beyaz Eşya",
      content6: "Elektrik Tesisat",
      content7: "İş Güvenliği",
    },
    {
      text: "Anne,Bebek Oyuncak",
      id: 5,
      content: "Oyuncaklar",
      content2: "Bebek Bezi & Islak Mendil",
      content3: "Emzirme & Bebek Besleme",
      content4: "Bebek Bakımı",
      content5: "Bebek Sağlığı",
      content6: "Giyim",
      content7: "Çocuk Kitapları",
    },
    {
      text: "Spor, Outdoor",
      id: 6,
      content: "Spor Giyim Ayakkabı",
      content2: "Fitness Kondisyon",
      content3: "Elektrikli Scooter",
      content4: "Paten",
      content5: "Kamp Malzemeleri",
      content6: "Balıkçılık",
      content7: "Aksiyon Kamera",
    },

    {
      text: "Kozmetik, Kişisel Bakım",
      id: 7,
      content: "Parfüm",
      content2: "Makyaj",
      content3: "Cilt Bakımı",
      content4: "Saç Bakımı",
      content5: "Epilasyon & Ağda",
      content6: "Deodorant",
      content7: "Ağız Bakım",
    },
    {
      text: "Süpermarket, Pet Shop",
      id: 8,
      content: "Deterjan & Temizlik Ürünleri",
      content2: "Pet Shop",
      content3: "Gıda Ürünleri",
      content4: "İçecekler",
      content5: "Kağıt Ürünleri",
      content6: "Ev Tüketim Malzemeleri",
      content7: "Bebek Bezleri ve Islak Mendiller",
    },
    {
      text: "Kitap, Müzik, Film, Hobi",
      id: 9,
      content: "Kitap",
      content2: "Müzik",
      content3: "Film",
      content4: "Hobi",
      content5: "Aksiyon Kitapları",
      content6: "Klasik Kitaplar",
      content7: "Test Kitapları",
    },
  ];
  const [visibleId, setVisibleId] = useState(null);

  const handleClick = (id) => {
    setVisibleId(id);
  };

  return (
    <div>
      <Overlay isOpen={isOpen} onClose={() => toggleOverlay(false)}></Overlay>

      <div className="menu-item">
        <ul
          onMouseMove={() => handleHover(true)}
          onMouseOver={() => toggleOverlay(true)}
          className="items"
        >
          {items.map((item) => (
            <div
              key={item.id}
              onMouseMove={() => handleClick(item.id)}
              className="data-item"
            >
              <li className="item">{item.text}</li>
            </div>
          ))}
        </ul>
        {isHover ? (
          <div className="menu-hover" onMouseLeave={() => toggleOverlay(false)}>
            {items.map(
              (item) =>
                item.id === visibleId && (
                  <div
                    key={item.id}
                    className="data-item visible-item"
                    onMouseLeave={() => handleHover(false)}
                  >
                    <p className="item-content" href="#">
                      {item.content}
                    </p>
                    <p className="item-content" href="#">
                      {item.content2}
                    </p>
                    <p className="item-content" href="#">
                      {item.content3}
                    </p>
                    <p className="item-content" href="#">
                      {item.content4}
                    </p>
                    <p className="item-content" href="#">
                      {item.content5}
                    </p>
                    <p className="item-content" href="#">
                      {item.content6}
                    </p>
                    <p className="item-content" href="#">
                      {item.content7}
                    </p>
                  </div>
                )
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default MenuItems;
