import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';
import { GlobalSytyle } from './globalStyles';
import Hero from './components/Hero';
import Products from './components/Products';
import { productData, productDataTwo } from './components/Products/data';
import Feature from './components/Feature';


function App() {
  return (
    <Router>
      <GlobalSytyle />
      <Hero />
      <Products heading='Choisir ton favorie' data={productData} />
      <Feature />
      <Products heading='Des friandises pour vous' data={productDataTwo} />
    </Router>
  );
}

export default App;
