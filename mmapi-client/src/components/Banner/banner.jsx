/* eslint-disable space-before-function-paren */
import React from 'react';
import {
  Link,
  useLocation,
} from 'react-router-dom';
import './banner.css';

function Banner () {
  const location = useLocation().pathname;
  return (
    <nav className="app_nav">
      <div className="nav_container">
        <div className="nav_logo">
          <h1 className="logo_header">
            <span>MM</span>
            API
          </h1>
        </div>
        <ul className="nav_buttons">
          <li>
            <Link to="/" className={`buttons_button${location === '/' ? ' active' : ''}`} style={{ textDecoration: 'none' }}>Home </Link>
          </li>
          <li>
            <Link to="/rest" className={`buttons_button${location === '/rest' ? ' active' : ''}`} style={{ textDecoration: 'none' }}>REST </Link>
          </li>
          <li>
            <Link to="/graphql" className={`buttons_button${location === '/graphql' ? ' active' : ''}`} style={{ textDecoration: 'none' }}>GraphQL </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Banner;
