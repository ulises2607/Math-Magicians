import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react'; // Importa render y fireEvent
import Button from '../Components/Button';


test('renders button text', () => {
  const handleClickMock = jest.fn();
  render(<Button handleClick={handleClickMock}>{'7'}</Button>);
  const buttonElement = screen.getByText('7');
  expect(buttonElement).toBeTruthy()
});

test('calls handleClick when button is clicked', () => {
  const handleClickMock = jest.fn();
  const { getByText } = render(<Button handleClick={handleClickMock}>{'+'}</Button>);
  const buttonElement = getByText('+');
  
  fireEvent.click(buttonElement);
  expect(handleClickMock).toHaveBeenCalledWith('+');
});

test('calls handleClick when Enter key is pressed', () => {
  const handleClickMock = jest.fn();
  const { getByText } = render(<Button handleClick={handleClickMock}>{'AC'}</Button>);
  const buttonElement = getByText('AC');
  
  fireEvent.keyDown(buttonElement, { key: 'Enter' });
  expect(handleClickMock).toHaveBeenCalledWith('AC');
});
