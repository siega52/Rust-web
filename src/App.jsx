import React from 'react';
import Header from './components/Header';
import MainSection from './components/MainSection';
import WhySection from './components/WhySection';
import BuySection from './components/BuySection';
import '/src/styles/App.css';

function App() {
  return (
    <div className="app">
      <div className="app__background">
        <div className="noise"></div>
        <div className="vignette"></div>
      </div>
      
      <div className="app__content">
        <Header /> 
        <MainSection />
        <WhySection />
        <BuySection />
      </div>
    </div>
  );
}

export default App;