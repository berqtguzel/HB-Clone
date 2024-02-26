import React from 'react';

import './AppHeader.css';
import AppLogo from '../../Logo/AppLogo/AppLogo';
import NavInput from '../NavInput/NavInput';

const AppHeader = () => {
  return (
    <div className="app-header">
      <AppLogo />
      <NavInput />
      <div>
        <span>Sağ Kısım</span>
      </div>
    </div>
  );
};

export default AppHeader;
