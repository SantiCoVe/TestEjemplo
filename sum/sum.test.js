const sum = require('./sum');

test('sumar 1 + 2 es igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('sumar 0 + 0 es igual a 0', () => {
  expect(sum(0, 0)).toBe(0);
});