/* eslint-disable space-before-function-paren */
import React, { useEffect, useState } from 'react';
import './home.css';
import Hero from './Hero/hero';
import apiService from '../../api-service';

function Home () {
  const [stats, setStats] = useState({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    apiService.getStartStats()
      .then((statsResp) => setStats(statsResp))
      .then(() => setIsFetching(false));
  }, []);

  return (
    <>
      <Hero stats={stats} isFetching={isFetching} />
    </>
  );
}

export default Home;
