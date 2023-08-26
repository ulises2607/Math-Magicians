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

  test('render', async () => {
    const { quote } = render(<Quotes />);
    await waitFor(() => {
      expect(screen.getByText('Loading...').textContent).toBe('Loading...');
    });
    await waitFor(() => {
      expect(quote).toMatchSnapshot();
    });
  });
});
