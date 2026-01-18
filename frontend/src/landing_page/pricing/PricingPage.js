import React from 'react';

import Home from './Home';
import Brokerage from './Brokerage';

import Navbar from '../Navbar';
import Footer from '../Footer';

function HomePage() {
  return (
    <>
      <Navbar />
      <Home />
      <Brokerage />
      <Footer />
    </>
  );
}

export default HomePage;
