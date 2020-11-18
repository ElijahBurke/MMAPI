/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/prop-types */
/* eslint-disable space-before-function-paren */
import React from 'react';
import './sidenav.css';

function SideNav ({ active, setActive }) {
  return (
    <>
      <div className="rest_sidenav">
        <div className="sidenav_container">
          <div className={`sidenav_item header ${active === 'REST API' ? 'active' : ''}`} onClick={(e) => setActive(e.target.innerText)}>REST API</div>
          <div className={`sidenav_item main ${active === 'Fights' ? 'active' : ''}`} onClick={(e) => setActive(e.target.innerText)}>Fights</div>
          <div className={`sidenav_item sub ${active === 'All Fights' ? 'active' : ''}`} onClick={(e) => setActive(e.target.innerText)}>All Fights</div>
          <div className={`sidenav_item sub ${active === 'Fight by ID' ? 'active' : ''}`} onClick={(e) => setActive(e.target.innerText)}>Fight by ID</div>
          <div className={`sidenav_item main ${active === 'Fighters' ? 'active' : ''}`} onClick={(e) => setActive(e.target.innerText)}>Fighters</div>
          <div className={`sidenav_item sub ${active === 'All Fighters' ? 'active' : ''}`} onClick={(e) => setActive(e.target.innerText)}>All Fighters</div>
          <div className={`sidenav_item sub ${active === 'Fighter by Name' ? 'active' : ''}`} onClick={(e) => setActive(e.target.innerText)}>Fighter by Name</div>
          <div className={`sidenav_item main ${active === 'Events' ? 'active' : ''}`} onClick={(e) => setActive(e.target.innerText)}>Events</div>
          <div className={`sidenav_item sub ${active === 'All Events' ? 'active' : ''}`} onClick={(e) => setActive(e.target.innerText)}>All Events</div>
          <div className={`sidenav_item sub ${active === 'Event by ID' ? 'active' : ''}`} onClick={(e) => setActive(e.target.innerText)}>Event by ID</div>
          <div className={`sidenav_item main ${active === 'Divisions' ? 'active' : ''}`} onClick={(e) => setActive(e.target.innerText)}>Divisions</div>
          <div className={`sidenav_item sub Divisions ${active === 'All Divisions' ? 'active' : ''}`} onClick={(e) => setActive(e.target.innerText)}>All Divisions</div>
          <div className={`sidenav_item sub ${active === 'Division by ID' ? 'active' : ''}`} onClick={(e) => setActive(e.target.innerText)}>Division by ID</div>
        </div>
      </div>
    </>
  );
}

export default SideNav;
