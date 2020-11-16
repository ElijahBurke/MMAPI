/* eslint-disable space-before-function-paren */
import React from 'react';
import Button from './button/button';
import './options.css';

function Options () {
  return (
    <div className="app_options main_page_card">
      <div className="options_choose main_page_card_column">
        <div className="choose_info">
          <h4>How would you like to get your data?</h4>
        </div>
        <div className="choose_buttons  main_page_card_content">
          <Button name="REST" />
          <Button name="GraphQL" />
        </div>
      </div>
    </div>
  );
}

export default Options;
