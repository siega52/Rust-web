import React, { useState } from 'react';
import Group369 from '/src/img/Group-369.png';
import '/src/styles/Header.css';

const Header = () => {
  const [language, setLanguage] = useState('RU');

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-left">
          <a href="/" className="logo-link">
            <span className="logo-glow">DXM</span>
          </a>
        </div>

        <div className="header-center">
            <nav className="nav-menu">
            <a href="#" className="nav-link">
              <span className="nav-text">ГЛАВНАЯ</span>
            </a>
            <a href="#" className="nav-link">
              <span className="nav-text">КАТАЛОГ ИГР</span>
            </a>
            <a href="#" className="nav-link">
              <span className="nav-text">FAQ & ПОДДЕРЖКА</span>
            </a>
            <a href="#" className="nav-link">
              <span className="nav-text">НАШИ ГАРАНТИИ</span>
            </a>
          </nav>
        </div>

        <div className="header-right">
          <div className="language-selector">
            <button 
              className={`lang-btn ${language === 'RU' ? 'active' : ''}`}
              onClick={() => setLanguage('RU')}
            >
              RU
            </button>
            <span className="lang-separator">/</span>
            <button 
              className={`lang-btn ${language === 'US' ? 'active' : ''}`}
              onClick={() => setLanguage('US')}
            >
              US
            </button>
          </div>
          
          <div className="header-buttons">
            <button className="btn btn-primary">
              <span className="btn-textheader ">ПРИОБРЕСТИ</span>
            </button>
            <button className="btn btn-secondary">
              <img src={Group369} alt="" /><span className="btn-text">ВОЙТИ</span>
            </button>
          </div>
        </div>

      </div>
    </header>
  );
};

export default Header;