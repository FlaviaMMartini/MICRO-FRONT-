import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Cards from './Cards'; 
import axios from 'axios';


jest.mock('axios');

describe('Cards Component', () => {
  const mockProducts = [
    {
      id: 1,
      title: 'Produto 1',
      description: 'Descrição do Produto 1',
      price: 100,
      thumbnail: 'http://example.com/produto1.jpg',
    },
    {
      id: 2,
      title: 'Produto 2',
      description: 'Descrição do Produto 2',
      price: 150,
      thumbnail: 'http://example.com/produto2.jpg',
    },
  ];

  beforeEach(() => {
    axios.get.mockResolvedValue({ data: { products: mockProducts } });
  });

  afterEach(() => {
    jest.clearAllMocks(); 
  });

  test('renders products correctly', async () => {
    render(<Cards onAddToCart={() => {}} />);

    await waitFor(() => {
      expect(screen.getByText('Produto 1')).toBeInTheDocument();
      expect(screen.getByText('Produto 2')).toBeInTheDocument();
      expect(screen.getByText('R$100')).toBeInTheDocument();
      expect(screen.getByText('R$150')).toBeInTheDocument();
    });
  });

  test('calls onAddToCart when button is clicked', async () => {
    const mockOnAddToCart = jest.fn();
    render(<Cards onAddToCart={mockOnAddToCart} />);
    await waitFor(() => {
      const buyButton = screen.getByText('Comprar', { selector: 'button' });
      fireEvent.click(buyButton); 

      expect(mockOnAddToCart).toHaveBeenCalledTimes(1); 
      expect(mockOnAddToCart).toHaveBeenCalledWith(mockProducts[0]);
    });
  });
});
