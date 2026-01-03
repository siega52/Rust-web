import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
// import Hero from './components/Hero';
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
        <Main />
      </div>
    </div>
  );
}

export default App;