import React from 'react';
import { Card, Row, Col } from 'antd';

const ShoppingCart = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.total, 0);
  const discountedTotal = total * 0.9; 

  return (
    <div>
      <h2>Carrinho de Compras</h2>
      <Row gutter={16}>
        {cartItems.map(item => (
          <Col 
            xs={24}
            sm={12}
            md={8}
            key={item.id}
          >
            <Card
              title={item.title}
              style={{ marginBottom: '20px' }}
              cover={<img alt={item.title} src={item.thumbnail} />}
            >
              <p>Preço: R${item.price}</p>
              <p>Quantidade: {item.quantity}</p>
              <p>Total: R${item.total.toFixed(2)}</p>
            </Card>
          </Col>
        ))}
      </Row>
      <h3>Total: R${total.toFixed(2)}</h3>
      <h3>Total com Desconto: R${discountedTotal.toFixed(2)}</h3>
    </div>
  );
};

export default ShoppingCart;
