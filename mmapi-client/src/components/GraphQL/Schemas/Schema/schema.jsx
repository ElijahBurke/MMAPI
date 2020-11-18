/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable space-before-function-paren */
import React from 'react';
import './schema.css';

function Schema ({ title, text }) {
  return (
    <>
      <div className="schema_card">
        <h4>{title}</h4>
        <div className="schema_code">
          <pre>
            <code>
              {text}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default Schema;
