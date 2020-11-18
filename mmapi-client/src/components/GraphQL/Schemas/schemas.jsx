/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable space-before-function-paren */
import React from 'react';
import './schemas.css';
import Schema from './Schema/schema';

function Schemas ({ title, schemas }) {
  return (
    <>
      <div className="schema_wrapper">
        {Object.keys(schemas).map((key) => <Schema title={key} text={schemas[key]} />)}
      </div>
    </>
  );
}

export default Schemas;
