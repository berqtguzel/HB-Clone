import React from 'react';
import './AppHeader.css';
import AppLogo from '../../Logo/AppLogo/AppLogo';
import NavInput from '../NavInput/NavInput';
import Location from '../Location/Location';
import Login from '../Login/Login';
import Shopping from '../Shopping/Shopping';
import Cb from '../ColorfulBorder/Cb';

const AppHeader = () => {
  return (
    <>
      <div className="app-header">
        <AppLogo />
        <NavInput />
        <Location />
        <Login />
        <Shopping />
        <Cb />
      </div>
    </>
  );
};

export default AppHeader;
