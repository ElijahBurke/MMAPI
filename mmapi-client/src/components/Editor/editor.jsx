/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable space-before-function-paren */
import React from 'react';
import './editor.css';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import { Controlled as ControlledEditor } from 'react-codemirror2';

function Editor ({ value, onChange }) {
  const handleChange = (editor, data, value) => {
    onChange(value);
  };

  return (
    <div className="editor_container">
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lineNumbers: true,
          mode: 'javascript',
        }}
      />
    </div>
  );
}

export default Editor;
