/* eslint-disable space-before-function-paren */
import React from 'react';
import './loader.css';
import octagon from '../../assetts/octagon.png';

function Loader () {
  return (
    <>
      <div className="app_loader">
        <div className="loader_logo_loader">
          <img src={octagon} alt="octagon" className="logo_octagon" />
          <h1 className="logo_header_loader">
            <span>MM</span>
            API
          </h1>
        </div>
      </div>
    </>
  );
}

export default Loader;
