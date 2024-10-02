import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Button } from 'antd';
import axios from 'axios';

const Cards = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://dummyjson.com/products');
      setProducts(response.data.products);
    };

    fetchProducts();
  }, []);

  return (
    <Row gutter={16}>
      {products.map(product => (
        <Col 
          xs={24}
          sm={12}
          md={8}
          key={product.id}
        >
          <Card
            title={product.title}
            style={{ marginBottom: '20px' }}
            cover={<img alt={product.title} src={product.thumbnail} />}
          >
            <p>{product.description}</p>
            <p>R${product.price}</p>
            <Button 
              type="primary" 
              onClick={() => onAddToCart(product)} 
            >
              Comprar
            </Button>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default Cards;
