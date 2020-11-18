/* eslint-disable space-before-function-paren */
import React, { useState } from 'react';
import './rest.css';
import SideNav from './SideNav/sidenav';
import RestMain from './RestMain/restmain';
import MDS from '../../MD/getMds';

function Rest () {
  const [active, setActive] = useState('REST API');

  return (
    <>
      <div className="rest_container">
        <div className="rest_container_sidenav">
          <SideNav active={active} setActive={setActive} />
        </div>
        <div className="rest_container_main">
          <RestMain md={MDS[active]} />
        </div>
      </div>
    </>
  );
}

export default Rest;
