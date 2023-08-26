import Operate from '../logic/operate';

test('Operation Sum', () => {
  expect(Operate(5, 5, '+')).toBe('10');
});

test('Operation Substract Positive', () => {
  expect(Operate(5, 4, '-')).toBe('1');
});

test('Operation Substract Negative', () => {
  expect(Operate(4, 5, '-')).toBe('-1');
});

test('Operation Multiply', () => {
  expect(Operate(5, 4, 'x')).toBe('20');
});

test('Operation Divide Greater Than Zero', () => {
  expect(Operate(20, 4, '÷')).toBe('5');
});

test('Operation Divide Lower Than Zero', () => {
  expect(Operate(5, 20, '÷')).toBe('0.25');
});
