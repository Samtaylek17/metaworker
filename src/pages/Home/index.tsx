import React from 'react';

import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Uploader from '../../components/Uploader';
import Conversions from '../../components/Conversions';

const Home = () => (
  <main className="h-screen dark:bg-gray-900 bg-white">
    <Header />
    <Hero />
    <Uploader />
    <Conversions />
  </main>
);

export default Home;
