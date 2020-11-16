/* eslint-disable space-before-function-paren */
import React from 'react';
import './hero.css';
import cageBackground from '../../assetts/cage-background.jpg';

function Hero () {
  return (
    <>
      <div className="app_hero">
        <img src={cageBackground} alt="hero" className="background" />
        <div className="hero_image_filter" />
        <div className="hero_logo">
          <h1 className="logo_header">
            <span>MM</span>
            API
          </h1>
        </div>
        <div className="hero_info">
          <div className="info_container">
            <h3>One Stop For All Your UFC Data Needs</h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
