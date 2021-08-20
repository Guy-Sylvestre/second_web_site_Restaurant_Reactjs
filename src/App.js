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
      <Products heading='Choose your favorite' data={productData} />
      <Feature />
      <Products heading='Swwet Treats for You' data={productDataTwo} />
    </Router>
  );
}

export default App;
