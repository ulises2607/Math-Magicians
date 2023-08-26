import React from 'react';
import { render, waitFor, screen } from '@testing-library/react';
import Quotes from '../Components/Quotes';

describe('Quotes Component', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('should display loading state', () => {
    render(<Quotes />);
    expect(screen.getByText('Loading...').textContent).toBe('Loading...');
  });

  it('should display error state', async () => {
    jest.spyOn(global, 'fetch').mockRejectedValue(new Error('API Error'));

    render(<Quotes />);
    await waitFor(() => {
      expect(screen.getByText('Something went wrong! Please verify the connection.').textContent).toBe('Something went wrong! Please verify the connection.');
    });
  });

  it('should display success state', async () => {
    const mockResponse = {
      "quote": "Happiness lies neither in vice nor in virtue but in the manner we appreciate the one and the other, and the choice we make pursuant to our individual organization.",
      "author": "Marquis de Sade",
      "category": "happiness"
    };

    jest.spyOn(global, 'fetch').mockResolvedValue({
      json: async () => mockResponse,
    });

    render(<Quotes />);
    await waitFor(() => {
      expect(screen.getByText("Happiness lies neither in vice nor in virtue but in the manner we appreciate the one and the other, and the choice we make pursuant to our individual organization.")).toBeInTheDocument()
      expect(screen.getByText('Sample author')).toBeInTheDocument();
    });
  });
});
