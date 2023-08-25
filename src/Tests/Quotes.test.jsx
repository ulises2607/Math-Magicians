import React from 'react';
import { render, waitFor, screen, toBeInTheDocument } from '@testing-library/react';
import Quotes from '../Components/Quotes';

describe('Quotes Component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  // it('should display loading state', () => {
  //   render(<Quotes />);
  //   expect(screen.getByText('Loading...')).toContain('Loading...');
  // });

  // it('should display error state', async () => {
  //   jest.spyOn(global, 'fetch').mockRejectedValue(new Error('API Error'));

  //   render(<Quotes />);
  //   await waitFor(() => {
  //     expect(screen.getByText('Something went wrong! Please verify the connection.')).toBeInTheDocument();
  //   });
  // });

  it('should display success state', async () => {
    const mockResponse = {
      category: 'learning',
      quote: 'Sample quote text',
      author: 'Sample author',
    };

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockResponse,
    });

    render(<Quotes />);
    await waitFor(() => {
      expect(screen.getByText('Sample quote text')).toBeInTheDocument()
      expect(screen.getByText('Sample author')).toBeInTheDocument();
    });
  });
});
