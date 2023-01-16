/**
 * Check Intl as well
 */

const num1 = 123451;
const num2 = 1223;
const num3 = 12323123;

num1.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD',
}); // $123,451.00

num1.toLocaleString('en-US', {
  style: 'currency',
  currency: 'EUR',
}); // €123,451.00

num1.toLocaleString('en-US', {
  style: 'currency',
  currency: 'BYN',
}); // BYN 123,451.00

function formatPrice(cents: number) {
  return (cents / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
}

console.log(formatPrice(num1 - num2 + num3));
