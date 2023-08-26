import React from 'react';
import { render, screen } from '@testing-library/react';
import Screen from '../Components/Screen';

test('correctly renders next with full object', () => {
  const myInput = {
    total: '5',
    next: '10',
    operation: '+',
  };
  render(<Screen input={myInput} />);
  const result = screen.getByText('10');
  expect(result).toBeTruthy();
});

test('correctly renders next with just next assigned', () => {
  const myInput = {
    total: '',
    next: '10',
    operation: '',
  };
  render(<Screen input={myInput} />);
  const result = screen.getByText('10');
  expect(result).toBeTruthy();
});

test('correctly renders next with just next and operation assigned', () => {
  const myInput = {
    total: '',
    next: '10',
    operation: '+',
  };
  render(<Screen input={myInput} />);
  const result = screen.getByText('10');
  expect(result).toBeTruthy();
});
