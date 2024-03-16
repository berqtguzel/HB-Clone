import React from 'react';
import './AppHeader.css';
import AppLogo from '../../Logo/AppLogo/AppLogo';
import NavInput from '../NavInput/NavInput';
import Location from '../Location/Location';
import Login from '../Login/Login';
import ColorfulBorder from '../ColorfulBorder/ColorfulBorder';
import MenuItems from '../MenuItems/MenuItems';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

const AppHeader = () => {
  return (
    <div className="app-header">
      <div className="app-header-top">
        <AppLogo />
        <NavInput />
        <Location />
        <Login />
        <ShoppingCart />
      </div>
      <div className="app-header-mid">
        <ColorfulBorder />
      </div>
      <div className="app-header-bottom">
        <MenuItems />
      </div>
    </div>
  );
};

export default AppHeader;
