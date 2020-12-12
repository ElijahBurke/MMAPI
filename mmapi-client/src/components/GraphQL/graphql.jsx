/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-shadow */
/* eslint-disable space-before-function-paren */
import React, { useState } from 'react';
import './graphql.css';
import { graphQlQueryPlayground } from '../../api-service';
import Editor from '../Editor/editor';
import schemas from './schemas';
import Schemas from './Schemas/schemas';

function GraphQL () {
  const [query, setQuery] = useState('// Start writing your query here');
  const [dataDisplay, setDataDisplay] = useState('// See your response here...');
  const [typesActive, setTypesActive] = useState(false);
  const [queriesActive, setQueriesActive] = useState(false);

  const handleSubmit = () => {
    graphQlQueryPlayground(query)
      .then((data) => {
        if (data.errors) setDataDisplay(`Error: ${data.errors[0].message}`);
        if (data.data) {
          let str = '';
          const keys = Object.keys(data.data);
          keys.forEach((key, i) => {
            if (i === 0) str += '[\n';
            str += `{ ${key}: { \n`;
            str += data.data[key].reduce((acc, obj) => {
              let newStr = '';
              const objKeys = Object.keys(obj);
              objKeys.forEach((objKey, j) => {
                if (j === 0) newStr += '{\n';
                newStr += `  ${objKey}: ${obj[objKey]},\n`;
                if (j === objKeys.length - 1) newStr += '},\n';
              });
              return acc + newStr;
            }, '').trim();
            str += '},\n';
            if (i === keys.length - 1) str += ']';
          });
          setDataDisplay(str);
        }
      })
      .then(() => setQuery((query) => `// Here is your request!
      fetch('http://localhost:3001/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({query: "${query}"})
      })
        .then(r => r.json())
        .then(data => console.log('data returned:', data));
      `));
  };

  const handleChange = (value) => {
    setQuery(value);
  };

  return (
    <div className="container_graphql">
      <div className="graphql_info">
        <div className="graphql_info_title">
          GraphQL Playground
        </div>
        <div className="graphql_info_slidedown">
          Create a query on the left hand side, and see the response on the right hand side:
        </div>
      </div>
      <div className="graphql_playground">
        <div className="playground_query">
          <Editor value={query} onChange={handleChange} />
          <button type="submit" onClick={handleSubmit}>Make Query...</button>
        </div>
        <div className="playground_response">
          <div className="playground_response_container">
            <pre>
              <code>
                {dataDisplay}
              </code>
            </pre>
          </div>
        </div>
      </div>
      <div className="schema_active_buttons">
        <div className={`queries_button ${typesActive ? 'active' : ''}`} onClick={() => setTypesActive((typesActive) => !typesActive)}>Show Types</div>
        <div className={`queries_button ${queriesActive ? 'active' : ''}`} onClick={() => setQueriesActive((queriesActive) => !queriesActive)}>Show Queries</div>
      </div>
      <div className="graphql_schemas_queries">
        {typesActive && (
          <div className="graphql_schemas">
            <Schemas title="Schemas" schemas={schemas.schemas} />
          </div>
        )}
        {queriesActive && (
          <div className="queries">
            <Schemas title="Queries" schemas={schemas.queries} />
          </div>
        )}
      </div>
    </div>
  );
}

export default GraphQL;
