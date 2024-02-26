import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';
import './NavInput.css'; // Adı değiştirildi ve büyük harfle başladığından emin olun

function NavInput() {
  // İsim büyük harfle başlamalı
  const [isFocused, setIsFocused] = useState(false);

  const handleOnFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <div className="nav-input">
      <div className="search-bar">
        <input
          onFocus={handleOnFocus}
          onBlur={handleBlur}
          className="nav-search"
          name="search"
          type="text" // Boşluk kaldırıldı
          placeholder="Ürün, kategori veya marka ara"
        />
        <button
          className={`search-button ${
            isFocused ? 'search-focused-button' : ''
          }`}
        >
          ARA
        </button>
      </div>
      {/* //<FaSearch className="search-icon" /> */}
    </div>
  );
}

export default NavInput; // İsim büyük harfle başlamalı
