import React, { useState } from "react";
import "../Location/Location.css";
import { CiLocationOn } from "react-icons/ci";
import { IoIosArrowDown } from "react-icons/io";

const Location = () => {
  const [isClick, setIsClicked] = useState(false);

  const handleIsClick = (isClick) => {
    setIsClicked(isClick);
  };

  return (
    <div className="locations">
      <div
        onClick={() => handleIsClick(true)}
        onDoubleClick={() => handleIsClick(false)}
        className={`location ${isClick ? "location-focus" : ""}`}
      >
        <div className="location-link" href="#">
          <CiLocationOn className="location-icon" />
          <div className="texts">
            <p className="location-text">Konum</p>
            <p className="location-choose-text">Konum Seç</p>
          </div>
          <IoIosArrowDown
            className={`arrow-icon ${isClick ? "arrow-icon-focus" : ""}`}
          />
        </div>
      </div>
      {isClick ? (
        <div className="location-input">
          <h3 className="input-main-text">Konumunuzu Belirleyin</h3>
          <p className="input-text">
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
        ""
      )}
    </div>
  );
};

export default Location;
