import React, { useState } from 'react';
import Modal from './Modal.jsx';
import { useProducts } from '/src/api/products';
import '/src/styles/BuySection.css';
import Tags from '/src/img/tags.png';
import Mask from '/src/img/Mask-group.png'

const BuySection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  
  const { mainProduct, smallProducts } = useProducts();

  const handleBuyClick = (product) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <section className="buy-section" id="buy">
      <div className="buy-background">
        {/* <div className="bg-overlay"></div> */}
      </div>

      <div className="buy-container">
        <div className="buy-header">
          <h2 className="section-title">КУПИТЬ</h2>
          <p className="section-subtitle">
            В данном разделе вы можете приобрести разные виды подписок на наш продукт
          </p>
        </div>

        {mainProduct && (
          <div className="main-card">
            <div className="main-card-content">
              <div className="main-card-left">
                <div className="card-image-wrapper">
                  <div className="card-image">
                    <img 
                      src={mainProduct.img} 
                      alt={mainProduct.title}
                      className="product-image"
                    />
                  </div>
                </div>
              </div>

              {/* Правая часть - информация */}
              <div className="main-card-right">
                <div className="card-info">
                    <img src={Tags} alt="tags" />
                </div>
                <div className="card-name">
                    <h3 className="card-name-im">IMMORTAL</h3>
                </div>
                <div className="price-block">
                  <span className="price-amount">{mainProduct.price}</span>
                </div>
                
                <p className="card-description-buy">
                  Партнёрский уровень доступа с коммерческими возможностями.
                </p>
                <p className="card-description-buy">
                  Преимущества:
                </p>                
                <div className="features-list">
                  <div className="feature-item">
                    <span className="feature-icon"><img src={Mask} alt="Mask" /></span>
                    <span className="feature-text">всё из уровня LEGENDARY;</span>
                  </div>
                  
                  <div className="feature-item">
                    <span className="feature-icon"><img src={Mask} alt="Mask" /></span>
                    <span className="feature-text">уникальная роль IMMORTAL в DISCORD;</span>
                  </div>
                  
                  <div className="feature-item">
                    <span className="feature-icon"><img src={Mask} alt="Mask" /></span>
                    <span className="feature-text">личный менеджер в Telegram/Discord;</span>
                  </div>
                </div>
                
                <button 
                  className="buy-button main-buy-button"
                  onClick={() => handleBuyClick(mainProduct)}
                >
                  <span className="button-text">ПРИОБРЕСТИ</span>
                  <span className="button-glow"></span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Сетка из 5 маленьких карточек */}
        <div className="small-cards-grid">
          {smallProducts.map((product) => (
            <div key={product.id} className="small-card">
              <div className="small-card-header">
                <div className="small-card-image">
                  <img 
                    src={product.img} 
                    alt={product.title}
                    className="product-image-small"
                  />
                </div>
              </div>
              <div className="small-card-titles">
                <h3 className="card-type">{product.title}</h3>
              </div>
              <div className="small-card-price">
                <span className="price">{product.price}</span>
              </div>
              
              <p className="small-card-description">{product.subtitle}</p>
              
              <button 
                className="buy-button small-buy-button"
                onClick={() => handleBuyClick(product)}>
                <span className="button-text">ПРИОБРЕСТИ</span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Модальное окно */}
      <Modal 
        isOpen={modalOpen}
        onClose={handleCloseModal}
        product={selectedProduct}
      />
    </section>
  );
};

export default BuySection