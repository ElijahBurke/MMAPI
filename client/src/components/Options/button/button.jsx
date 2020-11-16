/* eslint-disable react/prop-types */
/* eslint-disable space-before-function-paren */
import React from 'react';
import './button.css';

function Button ({ name }) {
  return (
    <>
      <div className="options_button">
        <h3>{name}</h3>
      </div>
    </>
  );
}

export default Button;
