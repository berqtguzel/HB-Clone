import React, { useState } from 'react';
import '../MenuItems/MenuItems.css';
import Overlay from '../../Overlay/Overlay';
const MenuItems = () => {
  const [isHover, isSetHover] = useState(false);

  const handleHover = () => {
    isSetHover(true);
  };
  const handleisHover = () => {
    isSetHover(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="menu-item">
        <ul
          onMouseEnter={toggleOverlay}
          onMouseMove={handleHover}
          onMouseLeave={handleisHover}
          className="items"
        >
          <li
            onMouseMove={handleHover}
            onMouseLeave={handleisHover}
            className="item"
          >
            Elektronik
          </li>
          <li className="item">Moda</li>
          <li className="item">Ev, Yaşam, Kırtasiye, Ofis</li>
          <li className="item">Oto,Bahçe,Yapı Market</li>
          <li className="item">Anne, Bebek, Oyuncak</li>
          <li className="item">Spor, Outdoor</li>
          <li className="item">Kozmetik, Kişisel Bakım</li>
          <li className="item">Süpermarket, Pet Shop</li>
          <li className="item">Kitap, Müzik, Film, Hobi</li>
        </ul>
      </div>

      {isHover ? (
        <>
          <div className="menu-hover"></div>
        </>
      ) : (
        ''
      )}
    </>
  );
};

export default MenuItems;
