import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import Header from 'header/Header'; // Verifique se o nome remoto está correto
import Footer from 'footer/Footer'; // O mesmo se aplica aqui
import Cards from 'cards/Cards'; // E aqui também
import { Modal } from 'antd';

const App = () => {
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleShowProducts = () => {
    setIsModalVisible(true);
  };

  const handleSelectProduct = (product) => {
    setSelectedProducts(prev => [...prev, product]);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  return (
    <div>
      <Header onShowProducts={handleShowProducts} />
      <Cards onSelectProduct={handleSelectProduct} />
      <Footer />
      <h1>Testando</h1> {/* Este texto deve ser exibido */}
    </div>
  );
};

export default App;
