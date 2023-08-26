import calculate from '../logic/calculate';
import operate from '../logic/operate';

describe('calculate function', () => {
  // Prueba de caso básico: AC button
  it('should clear the calculator data on AC button press', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });

  it('should update next with a number when operation is present', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '2');
    expect(result).toEqual({
      total: '10',
      next: '52',
      operation: '+',
    });
  });

  // Prueba de igual (=) con operación y next
  it('should perform the operation and update total on equal button press', () => {
    const result = calculate({ total: '10', next: '5', operation: '+' }, '=');
    const expectedResult = operate('10', '5', '+');
    expect(result).toEqual({
      total: expectedResult,
      next: null,
      operation: null,
    });
  });

  it('should do nothing on equal button press with no operation and next', () => {
    const result = calculate({ total: null, next: '5', operation: null }, '=');
    expect(result).toEqual({});
  });

  it('should toggle the sign of total on +/- button press', () => {
    const result = calculate({ total: '10', next: null, operation: null }, '+/-');
    expect(result).toEqual({
      total: '-10',
      next: null,
      operation: null,
    });
  });
});
