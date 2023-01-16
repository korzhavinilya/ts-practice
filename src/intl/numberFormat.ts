const currencyFormatter = new Intl.NumberFormat('ru', {
  style: 'currency',
  currency: 'GBP',
});
console.log(currencyFormatter.format(1234.5)); // 1 234,5 £
console.log(
  (1234.5).toLocaleString('ru', { style: 'currency', currency: 'GBP' })
);

const twoDigitsAfterCommaFormatter = new Intl.NumberFormat('en-GB', {
  minimumFractionDigits: 3,
});
console.log(twoDigitsAfterCommaFormatter.format(1234.5)); // 1 234,50 £
console.log((1235.5).toLocaleString('en-GB', { minimumFractionDigits: 3 }));
