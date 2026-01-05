// import React, { useState } from 'react';
import '/src/styles/MainSection.css';
import Group3 from '/src/img/Group-3.png';
import Group2 from '/src/img/Group-2.png';

const MainSection = () => {
  return (
    <main className="main-section">
      {/* <div className="background-image"></div> */}
      <div className="main-container">
        <div className="main-content">
          <div className="title-container">
            <img src={Group3} alt="ничего" />
            <h1 className="main-title">
              Богатый
              <span className="title-red"> выбор макросов для игр</span>
            </h1>
          </div>

          <div className="description-container">
            <p className="main-description">
              Каталог приватных макросов с бесчисленным количеством уникальных возможностей!
            </p>
          </div>

          <div className="buttons-container">
            <button 
              className="main-btn main-btn-primary">
              <span className="btn-content">
                <span className="btn-text">ПРИОБРЕСТИ</span>
              </span>
            </button>

            <button 
              className="main-btn main-btn-secondary">
              <span className="btn-content">
                <span className="btn-text">ПОДРОБНЕЕ</span>
              </span>
            </button>
          </div>
        </div>

        <div className="main-image-container">
          <div className="image-wrapper">
            <img src={Group2} alt="Макросы для игр" className="hero-image" loading="lazy"/>
          </div>
        </div>

      </div>
    </main>
  );
};

export default MainSection;