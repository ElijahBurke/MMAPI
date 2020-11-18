/* eslint-disable react/prop-types */
/* eslint-disable space-before-function-paren */
import React, { useState, useEffect } from 'react';
import './restmain.css';
import ReactMarkdown from 'react-markdown';

function RestMain ({ md }) {
  const [mdFetched, setMdFetched] = useState(null);

  useEffect(() => {
    fetch(md)
      .then((resp) => resp.text())
      .then((res) => setMdFetched(res));
  }, [md]);

  return (
    <>
      <div className="rest_main">
        <ReactMarkdown source={mdFetched} />
      </div>
    </>
  );
}

export default RestMain;
