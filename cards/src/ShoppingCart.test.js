import React from 'react';
import { render } from '@testing-library/react';
import ShoppingCart from './ShoppingCart';

describe('ShoppingCart Component', () => {
  const mockCartItems = [
    {
      id: 1,
      title: 'Produto 1',
      thumbnail: 'https://dummyimage.com/200x200/000/fff',
      price: 100,
      quantity: 2,
      total: 200,
    },
    {
      id: 2,
      title: 'Produto 2',
      thumbnail: 'https://dummyimage.com/200x200/000/fff',
      price: 50,
      quantity: 1,
      total: 50,
    },
  ];

  it('renders correctly with cart items', () => {
    const { getByText, getAllByRole } = render(<ShoppingCart cartItems={mockCartItems} />);


    expect(getByText(/carrinho de compras/i)).toBeInTheDocument();


    const productCards = getAllByRole('heading', { level: 3 }); 
    expect(productCards.length).toBe(mockCartItems.length);

    const totalPrice = mockCartItems.reduce((acc, item) => acc + item.total, 0);
    const discountedTotal = totalPrice * 0.9;

    expect(getByText(`Total: R$${totalPrice.toFixed(2)}`)).toBeInTheDocument();
    expect(getByText(`Total com Desconto: R$${discountedTotal.toFixed(2)}`)).toBeInTheDocument();
  });
});
