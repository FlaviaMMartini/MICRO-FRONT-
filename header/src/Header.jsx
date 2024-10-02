import React, { useState, Suspense } from 'react';
import { Button, Modal } from 'antd';

const ShoppingCart = React.lazy(() =>
  __federation_method_getRemote('cards', '../src/cards.jsx').then(module =>
    __federation_method_wrapDefault(module, true)
  )
);

const Header = ({ cartItems }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <header style={{ padding: '20px', background: '#02D72F' }}>
      <h1 style={{ color: '#fff', margin: 0 }}> HEADER</h1>
      <Button
        type="primary"
        style={{ float: 'right' }}
        onClick={showModal}
      >
        Abrir modal
      </Button>
      <Modal
        title="Carrinho de Compras"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        width={600}
      >
        <Suspense fallback={<div>Carregando Carrinho...</div>}>
          <ShoppingCart cartItems={cartItems} />
        </Suspense>
      </Modal>
    </header>
  );
};

export default Header;
