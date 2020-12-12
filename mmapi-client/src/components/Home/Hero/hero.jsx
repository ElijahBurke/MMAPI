/* eslint-disable react/prop-types */
/* eslint-disable space-before-function-paren */
import React from 'react';
import './hero.css';
import {
  Link,
} from 'react-router-dom';
import Loader from 'react-loader-spinner';
import DataItem from './Data/DataItem/dataitem';

function Hero ({ stats, isFetching }) {
  return (
    <>
      <div className="home_hero">
        <div className="hero_container">
          <div className="container_info">
            <h1>
              One Stop For All Your UFC Data
            </h1>
            <h3>
              Use our API to retrieve stats from any UFC event you wish. See the table below to see
              up to date information for the stats we are currently tracking. Use traditional REST
              queries to get general data or fully customise your requests using our GraphQL
              playground!
            </h3>
            <div className="container_buttons">
              <Link to="/rest" className="hero_button left" style={{ textDecoration: 'none' }}>REST </Link>
              <Link to="/graphql" className="hero_button right" style={{ textDecoration: 'none' }}>GraphQL </Link>
            </div>
            <div className="container_data_area">
              {isFetching ? <Loader type="Audio" color="#292835" height={100} width={400} />
                : Object.keys(stats)
                  .map((key) => <DataItem key={key} dataName={key} data={stats[key]} />)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
