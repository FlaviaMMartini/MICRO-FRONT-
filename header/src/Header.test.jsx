import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header'; 
import '@testing-library/jest-dom/extend-expect';


jest.mock('../src/cards.jsx', () => ({
  ShoppingCart: () => <div>Mocked Shopping Cart</div>,
}));

describe('Header Component', () => {
  const mockCartItems = [
    {
      id: 1,
      title: 'Product 1',
      price: 10.99,
      quantity: 1,
      total: 10.99,
      thumbnail: 'http://example.com/product1.jpg',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 20.99,
      quantity: 2,
      total: 41.98,
      thumbnail: 'http://example.com/product2.jpg',
    },
  ];

  test('renders Header component', () => {
    render(<Header cartItems={mockCartItems} />);


    expect(screen.getByText(/HEADER/i)).toBeInTheDocument();
  });

  test('opens modal on button click', () => {
    render(<Header cartItems={mockCartItems} />);

    const openModalButton = screen.getByText(/Abrir modal/i);
    fireEvent.click(openModalButton);


    expect(screen.getByText(/Carrinho de Compras/i)).toBeVisible();
  });

  test('closes modal on OK button click', () => {
    render(<Header cartItems={mockCartItems} />);

    // Abre o modal
    const openModalButton = screen.getByText(/Abrir modal/i);
    fireEvent.click(openModalButton);


    const okButton = screen.getByRole('button', { name: /ok/i });
    fireEvent.click(okButton);


    expect(screen.queryByText(/Carrinho de Compras/i)).not.toBeVisible();
  });

  test('closes modal on Cancel button click', () => {
    render(<Header cartItems={mockCartItems} />);


    const openModalButton = screen.getByText(/Abrir modal/i);
    fireEvent.click(openModalButton);


    const cancelButton = screen.getByRole('button', { name: /cancelar/i });
    fireEvent.click(cancelButton);


    expect(screen.queryByText(/Carrinho de Compras/i)).not.toBeVisible();
  });
});
