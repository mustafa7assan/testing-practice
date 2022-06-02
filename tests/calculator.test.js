const calculator = require('../modules/calculator');

describe('Test Calcualtor operations', () => {
  const number1 = 4;
  const number2 = 3;
  it('Check the sum of two number', () => {
    const expected = number1 + number2;
    expect(calculator.add(number1, number2)).toBe(expected);
  });
  it('Check the subtract of two number', () => {
    const expected = number1 - number2;
    expect(calculator.subtract(number1, number2)).toBe(expected);
  });
  it('Check the divide of two number', () => {
    const expected = number1 / number2;
    expect(calculator.divide(number1, number2)).toBeCloseTo(expected);
  });
  it('Throw an error when trying to divide by 0', () => {
    const error = 'Can not divide by zero.';
    expect(() => calculator.divide(number1, 0)).toThrow(error);
  });
  it('Check the multiply of two number', () => {
    const expected = number1 * number2;
    expect(calculator.multiply(number1, number2)).toBe(expected);
  });
});
