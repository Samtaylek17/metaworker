import React from 'react';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Uploader from '../../components/Uploader';

const Home = () => (
  <main className="h-screen dark:bg-gray-900 bg-white">
    <Header />
    <Hero />
    <Uploader />
  </main>
);

export default Home;
