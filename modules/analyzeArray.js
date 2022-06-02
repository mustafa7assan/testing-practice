module.exports = function (numbers) {
  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers),
    length: numbers.length,
    average: numbers.reduce((acc, num) => acc + num, 0) / numbers.length,
  };
};
