const capitalize = require('../modules/capitalize');

describe('Test Capitalize module', () => {
  it('Take a string and return the string with first letter capital.', () => {
    const actual = 'mustafa';
    const expected = 'Mustafa';
    expect(capitalize(actual)).toMatch(expected);
  });
});
