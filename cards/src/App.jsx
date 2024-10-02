import React, { useState } from 'react';
import { Layout } from 'antd';
import Cards from './Cards'; 
import ShoppingCart from './ShoppingCart'; 

const { Header, Content } = Layout;

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { 
                ...item, 
                quantity: item.quantity + 1, 
                total: (item.price * (item.quantity + 1)).toFixed(2) 
              }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1, total: product.price }];
      }
    });
  };

  return (
    <Layout>
      <Content style={{ padding: '5%' }}>
        <Cards onAddToCart={handleAddToCart} />
        <ShoppingCart cartItems={cartItems} />
      </Content>
    </Layout>
  );
};

export default App;
