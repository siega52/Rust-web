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
      <div className="footer-container">
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

        <div className="footer-content">
          <div className="footer-column">
            <h3 className="column-title">НАВИГАЦИЯ</h3>
            <ul className="column-links">
              <li>
                <a href="#" className="footer-link">
                  Каталог
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  О нас
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Руководство
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="column-title">ИНФОРМАЦИЯ</h3>
            <ul className="column-links">
              <li>
                <a href="#" className="footer-link">
                  Пользовательское соглашение
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Политика возврата
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3 className="column-title">ПОДПИШИСЬ НА НАС</h3>
            <div className="social-links">
              <a href="https://t.me/deadxmacro" className="social-link" target="_blank" rel="noopener noreferrer"><img src={tg} alt="tg" /></a>
              <a href="https://discord.com/invite/pfejrCXKDx" className="social-link" target="_blank" rel="noopener noreferrer"><img src={ds} alt="tg" /></a>
              <a href="https://www.youtube.com/c/DEADXMACROSTORE" className="social-link" target="_blank" rel="noopener noreferrer"><img src={yt} alt="tg" /></a>
              <a href="https://vk.com/produceddeadx" className="social-link" target="_blank" rel="noopener noreferrer"><img src={vk} alt="tg" /></a>
            </div>
            
            <div className="support-section">
              <a href="#" className="social-link" target="_blank" rel="noopener noreferrer"><img src={sp} alt="tg" /></a>
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