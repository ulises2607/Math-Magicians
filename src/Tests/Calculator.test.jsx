import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../Components/Calculator';

test('calculator adds input when button ia clicked', () => {
  render(<Calculator />);

  const numberButton = screen.getByText('2');

  fireEvent.click(numberButton);

  const screenElement = screen.getByTestId('screen-element');

  // Verifica si ambos contenidos están presentes en el texto del elemento
  expect(screenElement.textContent).toContain('2');
});

test('calculator give multiplication when the user input 2 numbers, the product operator and the equal button', () => {
  render(<Calculator />);
  const numberButton = screen.getByText('2');
  fireEvent.click(numberButton);

  const product = screen.getByText('x');
  fireEvent.click(product);

  const nextNumberButton = screen.getByText('5');
  fireEvent.click(nextNumberButton);

  const equal = screen.getByText('=');
  fireEvent.click(equal);

  const screenElement = screen.getByTestId('screen-element');

  expect(screenElement.textContent).toContain('10');
});
