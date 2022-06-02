const reverseString = require('../modules/reverseString');

describe('Test Reverse String module', () => {
  it('Take a string and return a reversed version of the string', () => {
    const actual = 'Mustafa';
    const expected = 'afatsuM';
    expect(reverseString(actual)).toMatch(expected);
  });
});
