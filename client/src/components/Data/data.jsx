/* eslint-disable space-before-function-paren */
import React from 'react';
import './data.css';
import DataItem from './DataItem/dataitem';

function Data () {
  return (
    <>
      <div className="app_data main_page_card">
        <div className="data_table main_page_card_column">
          <h3>Data tracked so far</h3>
          <div className="table_items main_page_card_content">
            <DataItem dataName="Fights" data="10" />
            <DataItem dataName="Events" data="11" />
            <DataItem dataName="Rounds" data="12" />
            <DataItem dataName="Total Time" data="13" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Data;
