import React, { useState } from 'react';
import '/src/styles/Modal.css';

const Modal = ({ isOpen, onClose, product }) => {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    game: '',
    agreement: false
  });

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handlePaymentSelect = (method) => {
    setSelectedPayment(method);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Здесь будет логика отправки данных на сервер
    console.log('Отправка данных:', {
      product,
      payment: selectedPayment,
      ...formData
    });
    
    // Закрываем модалку после успешной отправки
    // onClose();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <form className="modal-container" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        
        <button type="button" className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-header">
          <h2 className="modal-title">Оформление подписки</h2>
          <p className="modal-subtitle">Заполните форму для покупки</p>
        </div>
        
        <div className="modal-content">
          
          {/* Информация о продукте */}
          {product && (
            <div className="product-info">
              <div className="product-badge">
                <span className="product-type">LEGENDARY</span>
              </div>
              
              <div className="product-name">
                <h3>{product.title} - {product.subtitle}</h3>
                <div className="product-price">
                  <span className="price-amount">{product.price}</span>
                  <span className="price-period">/ месяц</span>
                </div>
              </div>
              
              <div className="product-features">
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Все возможности LEGENDARY</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Ежемесячное обновление</span>
                </div>
                <div className="feature">
                  <span className="feature-icon">✓</span>
                  <span>Приоритетная поддержка</span>
                </div>
              </div>
            </div>
          )}
          
          {/* Форма покупки */}
          <div className="purchase-form">
            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input 
                type="email" 
                id="email"
                name="email"
                placeholder="your@email.com"
                className="form-input"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="username">Имя пользователя *</label>
              <input 
                type="text" 
                id="username"
                name="username"
                placeholder="Ваш никнейм в игре"
                className="form-input"
                value={formData.username}
                onChange={handleInputChange}
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="game">Игра *</label>
              <select 
                id="game" 
                name="game"
                className="form-select"
                value={formData.game}
                onChange={handleInputChange}
                required
              >
                <option value="">Выберите игру</option>
                <option value="rust">Rust</option>
                <option value="cs2">Counter-Strike 2</option>
                <option value="valorant">Valorant</option>
                <option value="lol">League of Legends</option>
                <option value="other">Другая игра</option>
              </select>
            </div>
            
            <div className="form-group">
              <label>Способ оплаты *</label>
              <div className="payment-methods">
                <button 
                  type="button"
                  className={`payment-method ${selectedPayment === 'card' ? 'active' : ''}`}
                  onClick={() => handlePaymentSelect('card')}
                >
                  <span className="payment-icon">💳</span>
                  <span>Банковская карта</span>
                </button>
                <button 
                  type="button"
                  className={`payment-method ${selectedPayment === 'crypto' ? 'active' : ''}`}
                  onClick={() => handlePaymentSelect('crypto')}
                >
                  <span className="payment-icon">₿</span>
                  <span>Криптовалюта</span>
                </button>
                <button 
                  type="button"
                  className={`payment-method ${selectedPayment === 'exchange' ? 'active' : ''}`}
                  onClick={() => handlePaymentSelect('exchange')}
                >
                  <span className="payment-icon">🤝</span>
                  <span>Обмен</span>
                </button>
              </div>
            </div>
            
            <div className="form-agreement">
              <input 
                type="checkbox" 
                id="agreement" 
                name="agreement"
                className="agreement-checkbox"
                checked={formData.agreement}
                onChange={handleInputChange}
                required
              />
              <label htmlFor="agreement">
                Я согласен с <a href="/terms" className="agreement-link">правилами использования</a> и 
                <a href="/privacy" className="agreement-link"> политикой конфиденциальности</a>
              </label>
            </div>
            
            <button type="submit" className="form-submit">
              <span className="submit-text">Перейти к оплате</span>
              <span className="submit-price">{product?.price || '9 779 ₽'}</span>
            </button>
          </div>
          
        </div>
        
        <div className="modal-footer">
          <p className="footer-text">
            ❗ После оплаты активация происходит в течение 5 минут. 
            Ключ придет на указанный email.
          </p>
        </div>
        
      </form>
    </div>
  );
};

export default Modal;