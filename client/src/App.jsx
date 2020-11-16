/* eslint-disable space-before-function-paren */
import React, { useState } from 'react';
import './App.css';
import Hero from './components/Hero/hero';
import Options from './components/Options/options';
import Data from './components/Data/data';
import Loader from './components/Loader/loader';

function App () {
  const [isFetching, setIsFetching] = useState(true);
  console.log(setIsFetching);

  return (
    <>
      <Hero />
      <Options />
      { isFetching ? <Loader /> : <Data />}
    </>
  );
}

export default App;
