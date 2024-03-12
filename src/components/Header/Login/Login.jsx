import React, { useState } from 'react';
import '../Login/Login.css';
import { CiUser } from 'react-icons/ci';
import { IoIosArrowDown } from 'react-icons/io';
import Overlay from '../../Overlay/Overlay';

const Login = () => {
  const [isHover, setisHover] = useState(false);

  const handleIsHover = () => {
    setisHover(true);
  };
  const handleIsHover2 = () => {
    setisHover(false);
  };
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div
        onMouseEnter={handleIsHover}
        onMouseLeave={toggleOverlay}
        className="login"
      >
        <CiUser className="user-icon" />
        <h3 className="login-text">
          Giriş Yap
          <p className="login-text2">veya üye ol</p>
        </h3>
        <IoIosArrowDown className="login-arrow" />
        <br />
        {isHover ? (
          <>
            <Overlay isOpen={isOpen} onClose={toggleOverlay}></Overlay>
            <div onMouseLeave={handleIsHover2} className="login-hover-menu">
              <p className="login-p">Giriş Yap</p>
              <p className="login-p">Üye Ol</p>
              <hr />
              <p className="login-p">Siparişlerim</p>
              <p className="login-p">Soru ve Taleplerim</p>
              <p className="login-p">Sana Özel Fırsatlar</p>
              <p className="login-p">Hepsipay</p>
              <p className="login-p">Kullanıcı Bilgilerim</p>
              <p className="login-p">Değerlendirmelerim</p>
              <hr />
              <p className="login-p">Beğendiklerim</p>
              <p className="login-p">Tüm Listelerim</p>
              <hr />
              <p className="login-p">Kuponlarım</p>
            </div>
          </>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default Login;
