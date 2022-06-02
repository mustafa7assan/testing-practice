const caesarChiper = require('../modules/caesarChiper');

describe('Test caesar chiper mdoules', () => {
  it('Check character shiting with positive key', () => {
    const key = 3;
    const actual = 'A';
    const expected = 'D';
    expect(caesarChiper(actual, key)).toMatch(expected);
  });
  it('Check character shiting negitive key', () => {
    const key = -3;
    const actual = 'A';
    const expected = 'W';
    expect(caesarChiper(actual, key)).toMatch(expected);
  });
  it('Check character warping', () => {
    const key = 3;
    const actual = 'Z';
    const expected = 'C';
    expect(caesarChiper(actual, key)).toMatch(expected);
  });
  it('Check it with puncutation', () => {
    const key = 3;
    const actual = 'A!D';
    const expected = 'D!G';
    expect(caesarChiper(actual, key)).toMatch(expected);
  });
  it('Check it diffrent character case', () => {
    const key = 3;
    const actual = 'AbD';
    const expected = 'DeG';
    expect(caesarChiper(actual, key)).toMatch(expected);
  });
});
