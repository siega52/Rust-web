import React from 'react';
import '/src/styles/Footer.css';
import Pay from '/src/img/pay.png'
import ds from '/src/img/social/discord.png';
import sp from '/src/img/social/support.png';
import tg from '/src/img/social/tg.png';
import vk from '/src/img/social/vk.png';
import yt from '/src/img/social/yt.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      {/* Основной контейнер футера */}
      <div className="footer-container">
        
        {/* Верхняя строка с названием и предупреждением */}
        <div className="footer-top-row">
          <div className="footer-brand">
            <h2 className="brand-name">DEADXMACRO</h2>
          </div>
          
          <div className="footer-warning">
            <p className="warning-text">
              В любой игре с любым читом можно получить блокировку. 
              Старайтесь играть максимально осторожно!
            </p>
          </div>
        </div>

        {/* Основное содержимое - 4 колонки */}
        <div className="footer-content">
          
          {/* Колонка 1: Навигация */}
          <div className="footer-column">
            <h3 className="column-title">НАВИГАЦИЯ</h3>
            <ul className="column-links">
              <li>
                <a href="/catalog" className="footer-link">
                  Каталог
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  О нас
                </a>
              </li>
              <li>
                <a href="/guide" className="footer-link">
                  Руководство
                </a>
              </li>
            </ul>
          </div>

          {/* Колонка 2: Информация */}
          <div className="footer-column">
            <h3 className="column-title">ИНФОРМАЦИЯ</h3>
            <ul className="column-links">
              <li>
                <a href="/terms" className="footer-link">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a href="/privacy" className="footer-link">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="/refund" className="footer-link">
                  Политика возврата
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="column-title">ПОДПИШИСЬ НА НАС</h3>
            <div className="social-links">
              <a href="https://t.me/deadxmacro" className="social-link" target="_blank" rel="noopener noreferrer"><img src={tg} alt="tg" /></a>
              <a href="https://discord.gg/deadxmacro" className="social-link" target="_blank" rel="noopener noreferrer"><img src={ds} alt="tg" /></a>
              <a href="https://youtube.com/deadxmacro" className="social-link" target="_blank" rel="noopener noreferrer"><img src={yt} alt="tg" /></a>
              <a href="https://twitter.com/deadxmacro" className="social-link" target="_blank" rel="noopener noreferrer"><img src={vk} alt="tg" /></a>
            </div>
            
            <div className="support-section">
              <a href="https://github.com/deadxmacro" className="social-link" target="_blank" rel="noopener noreferrer"><img src={sp} alt="tg" /></a>
            </div>
          </div>

          <div className="footer-column">
            <h3 className="column-title">О ПРОЕКТЕ</h3>
            <div className="project-description">
              <p>
                DEADXMACRO — проект, основанный в 2018 году, занимающийся 
                созданием высококачественных и премиум-макросов для Rust.
              </p>
            </div>
          </div>

        </div>

        <div className="footer-bottom-row">
          <div className="copyright">
            <p className="copyright-text">
              © 2018-{currentYear} DEADXMACRO | Design — DESIGNCREW
            </p>
          </div>
          
          <div className="payment-methods">
            <div className="payment-icons">
                <img src={Pay} alt="pay" />
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;