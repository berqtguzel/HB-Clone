import React, { useState } from 'react';
import '../Location/Location.css';
import { CiLocationOn } from 'react-icons/ci';

const Location = () => {
  const [isClick, setIsClicked] = useState(false);

  const handleIsClick = () => {
    setIsClicked(true);
  };

  const handleDoubleClick = () => {
    setIsClicked(false);
  };

  return (
    <>
      <div
        onClick={setIsClicked}
        onDoubleClick={handleDoubleClick}
        className={`location ${isClick ? 'location-focus' : ''}`}
      >
        <div className="location-link" href="#">
          <CiLocationOn className="location-icon" />
          <p className="location-text-1">Konum</p>
          <p className="location-text-2">Konum Seç</p>
        </div>
        <br />
        {isClick ? (
          <div className="location-input">
            <h3 className="txt-dark">Konumunuzu Belirleyin</h3>
            <p className="txt-dark2">
              Adresinizi veya konum bilgilerinizi seçerek özel hizmetleri
              görebilirsiniz.
            </p>
            <select className="location-select" name="il" id="il">
              <option value="adana">Adana</option>
              <option value="mersin">Mersin</option>
              <option value="istanbul">İstanbul</option>
              <option value="Konya">Konya</option>
            </select>
            <br />
            <select className="location-select" name="il" id="il">
              <option value="adana">Adana</option>
              <option value="mersin">Mersin</option>
              <option value="istanbul">İstanbul</option>
              <option value="Konya">Konya</option>
            </select>
            <br />
            <select className="location-select" name="il" id="il">
              <option value="adana">Adana</option>
              <option value="mersin">Mersin</option>
              <option value="istanbul">İstanbul</option>
              <option value="Konya">Konya</option>
            </select>
            <br />
            <button className="select-button">Kaydet</button>
          </div>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default Location;
