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

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Здесь будет в будущем логика отправки данных на сервер
    console.log('Отправка данных:', {
      product,
      payment: selectedPayment,
      ...formData
    });
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <form className="modal-container" onClick={(e) => e.stopPropagation()} onSubmit={handleSubmit}>
        
        <button type="button" className="modal-close" onClick={onClose}>
          ✕
        </button>
        
        <div className="modal-header">
        </div>
        
        <div className="modal-content">
          
          {/* Информация о продукте */}
          {product && (
            <div className="product-info">
              <div className="product-badge">
                <span className="product-type">LEGENDARY</span>
              </div>
              
              <div className="product-name">
                <h3>{product.title}</h3>
                <div className="product-price">
                  <span className="price-amount">{product.price}</span>
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
        
          <div className="purchase-form">
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
              <label htmlFor="agreement">C политикой конфиденциальности, политикой возврата и условия использования - ознакомлен.</label>
            </div>
            
            <button type="submit" className="form-submit">
              <span className="submit-text">Перейти к оплате</span>
              <span className="submit-price">{product?.price || '9 779 ₽'}</span>
            </button>
          </div>
          
        </div>        
      </form>
    </div>
  );
};

export default Modal;