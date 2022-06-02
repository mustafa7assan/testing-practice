const analyzeArray = require('../modules/analyzeArray');

describe('Test analyze array module', () => {
  const numbers = [5, 8, 4, 7, 2, 9, 6];
  it('Check array minimum number', () => {
    const expected = 2;
    expect(analyzeArray(numbers).min).toBe(expected);
  });

  it('Check array maximum number', () => {
    const expected = 9;
    expect(analyzeArray(numbers).max).toBe(expected);
  });

  it('Check array length', () => {
    const expected = numbers.length;
    expect(analyzeArray(numbers).length).toBe(expected);
  });

  it('Check array average', () => {
    const expected = 41 / numbers.length;
    expect(analyzeArray(numbers).average).toBeCloseTo(expected);
  });
});
