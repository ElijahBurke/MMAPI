/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-shadow */
/* eslint-disable space-before-function-paren */
import React, { useState } from 'react';
import './graphql.css';
import ReactJson from 'react-json-view';
import apiService from '../../api-service';
import Editor from '../Editor/editor';
import schemas from './schemas';
import Schemas from './Schemas/schemas';

function GraphQL () {
  const [query, setQuery] = useState('// Start writing your query here');
  const [dataDisplay, setDataDisplay] = useState({});
  const [typesActive, setTypesActive] = useState(false);
  const [queriesActive, setQueriesActive] = useState(false);

  const handleSubmit = () => {
    apiService.graphQlQueryPlayground(query)
      .then((data) => {
        if (data.errors) setDataDisplay({ Error: `${data.errors[0].message}` });
        else {
          setDataDisplay(data);
          setQuery((query) => {
            const newReg = new RegExp(/\n/, 'gi');
            const anotherReg = new RegExp(/ +/, 'gi');
            const newQuery = query.trim().replace(newReg, '').replace(anotherReg, ' ');
            return `// Here is your request!
      fetch('http://localhost:3001/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({query: "${newQuery}"})
      })
        .then(r => r.json())
        .then(data => console.log('data returned:', data));
      `;
          });
        }
      });
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
            <ReactJson src={dataDisplay} />
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
