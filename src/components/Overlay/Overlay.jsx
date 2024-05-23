import { Fragment } from 'react';

import './Overlay.css';

export function Overlay({ isOpen, children }) {
  return (
    <Fragment>{isOpen && <div className="overlay">{children}</div>}</Fragment>
  );
}

export default Overlay;
