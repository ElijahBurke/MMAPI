/* eslint-disable space-before-function-paren */
import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import './App.css';
import Home from './components/Home/home';
import Rest from './components/Rest/rest';
import GraphQL from './components/GraphQL/graphql';
import Banner from './components/Banner/banner';

function App () {
  return (
    <Router>
      <Banner />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/rest" exact>
          <Rest />
        </Route>
        <Route path="/graphql" exact>
          <GraphQL />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
