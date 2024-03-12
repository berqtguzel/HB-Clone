import React from 'react';
import './AppHeader.css';
import AppLogo from '../../Logo/AppLogo/AppLogo';
import NavInput from '../NavInput/NavInput';
import Location from '../Location/Location';
import Login from '../Login/Login';
import Shopping from '../Shopping/Shopping';
import Cb from '../ColorfulBorder/Cb';
import MenuItems from '../MenuItems/MenuItems';

const AppHeader = () => {
  return (
    <>
      <div className="app-header">
        <div className="app-left">
          <AppLogo />
        </div>
        <div className="app-middle">
          <NavInput />
        </div>
        <div className="app-right">
          <Location />
          <Login />
          <Shopping />
        </div>
      </div>
      <div className="app-bottom">
        <Cb />
      </div>
      <div className="app-menu">
        <MenuItems />
      </div>
    </>
  );
};

export default AppHeader;
