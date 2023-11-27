import { useState } from 'react'
import './styles.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="App">
     <Header />
      <Hero />
      <Subscribe/>
      <Footer />
    </div>
  );
};

export default App
