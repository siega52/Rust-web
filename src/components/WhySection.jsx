import React from "react";
import '/src/styles/WhySection.css';

const WhySection = () => {
  return (
    <section className="why-section" id="why">
      {/* <div className="why-background"><div className="bg-overlay"></div></div> */}

      <div className="why-container">
        <div className="why-main-content">
          <div className="why-header">
            <h2 className="section-title">
              ПОЧЕМУ ИМЕННО МЫ ?
            </h2>
            
            <p className="section-subtitle">
              Современная система макросов, созданная для повышения эффективности и получения 
              конкурентного преимущества в игре Rust.
            </p>
          </div>

          <div className="cards-grid">            
            <div className="why-card card-1">
              <div className="card-header">
                <h3 className="card-title">Обширный выбор</h3>
              </div>
                <p className="card-description">
                  Мы предлагаем читы для самых различных игр, включая популярные игры.
                </p>
            </div>

            <div className="why-card card-2">
              <div className="card-header">
                <h3 className="card-title">Гибкий выбор оружия</h3>
              </div>
              <p className="card-description">
                ...модулей и их комбинирование для создания оптимальных конфигураций.
              </p>
            </div>

            <div className="why-card card-3">
              <div className="card-header">
                <h3 className="card-title">Система горячих клавиш</h3>
              </div>
              <p className="card-description">
                Необходима для мгновенного переключения между профилями и стилями игры праямо во время боя.
              </p>
            </div>

            <div className="why-card card-4">
              <div className="card-header">
                <h3 className="card-title">Автоматическое получение обновлений</h3>
              </div>
              <p className="card-description">
                Все происходит в фоновом режиме.
              </p>
            </div>

            <div className="why-card card-5">
              <div className="card-header">
                <h3 className="card-title">Тонкая настройка параметров</h3>
              </div>
            </div>

            <div className="why-card card-6">
              <div className="card-header">
                <h3 className="card-title">Интуитивный и удобный интерфейс</h3>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhySection;
