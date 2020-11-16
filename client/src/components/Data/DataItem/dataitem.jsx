/* eslint-disable react/prop-types */
/* eslint-disable space-before-function-paren */
import React from 'react';
import './dataitem.css';

function Data ({ dataName, data }) {
  return (
    <>
      <div className="data_item">
        <div className="data_item_border">
          <div className="item_title">
            <h4>{dataName}</h4>
          </div>
        </div>
        <div className="data_item_border">
          <div className="item_info">
            <h4>{data}</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Data;
