import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  it('renders correctly with the correct text', () => {
    const { getByText } = render(<Footer />);

    expect(getByText(/© 2024 VR Benefícios - Todos os direitos reservados/i)).toBeInTheDocument();
  });
});
